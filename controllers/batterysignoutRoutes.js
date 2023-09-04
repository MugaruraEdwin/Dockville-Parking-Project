const express = require('express');
const Hireout = require('../models/batterysignoutModel');
const Hire = require('../models/batteryhireModel');
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');


router.get('/batterysignout', ensureLoggedIn('/api/login'),(req,res) => {
    req.session.user = req.user;
    if(req.session.user.role === 'battery' || req.session.user.role === 'toplevel' ){
        res.render('batterysignout.pug');
    }else{
        const message = 'Access restricted to battery managers'
        res.render('login.pug', {alert:message})
    }
});


router.post('/signoutbattery', async (req,res) => {
    try{
        const receiptnumber = req.body.receiptnumber; // Picking up receipt number being registered for signout
        // Check if the receipt number exists in the Hireout model
        console.log(receiptnumber)
        const existingReceipt = await Hire.findOne({ receiptnumber: receiptnumber });
        if (!existingReceipt) {
            const errorMessage = 'Receipt number not found among hired batteries enter correct receipt number';
            res.status(400).render('batterysignout.pug', { error: errorMessage }); // Pass the error message to the template
            return;
        }else{
            const batterysignout= new Hireout(req.body);
            await batterysignout.save();
            console.log(req.body);
            res.redirect('/api/batterysignoutlist');
        }
    }
    catch(error){
        res.status(400).render('batterysignout.pug');
        console.log(error);
    }
});

router.get('/batterysignoutlist', ensureLoggedIn('/api/login'),async (req,res) => {
    try{
        req.session.user = req.user;
        if(req.session.user.role === 'battery' || req.session.user.role === 'toplevel' ){
            let items = await Hireout.find();
            // Revenue from cars parked

        
            // req.session.totalRevenue = amount;
            // Update the app.locals.amount with the calculated amount
            // res.locals.amount = amount;
            // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
            res.render('batterysignoutlist.pug',{hires: items});
        }else{
            const message = 'Access restricted to battery managers'
            res.render('login.pug', {alert:message})
        }
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any battery signouts"});
    }
})

// delete route


router.post('/hiresignout/delete', async (req,res) => {
    try{
        await Hireout.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete hired battery from database")
    }
})

//Updating data for signout

router.get('/batterysignout/edit/:id', async (req,res) => {
    try{
        const hired = await Hireout.findOne({_id: req.params.id});
        res.render('batterysignoutedit.pug', {hire:hired})
    }
    catch(error){
        res.status(400).send('Could not find any batteries hired in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/batterysignout/edit', async (req,res) => {
    try{
        await Hireout.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/batterysignoutlist')
    }
    catch(error){
        res.status(400).send('Could not edit Battery signout data');
        console.log(error);
    }
})



module.exports = router
