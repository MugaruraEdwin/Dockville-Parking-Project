const express = require('express');
const Signout = require('../models/parkSignout');
const Parker = require('../models/parkerModel')
const router = express.Router();

router.get('/signout',(req,res) => {
    res.render('signout.pug');
});

// posting car park signouts 

router.post('/signoutpark', async (req,res) => {
    try{
        const receiptnumber = req.body.receiptnumber; // Picking up receipt number being registered for signout
        // Check if the receipt number exists in the Parker model
        const existingReceipt = await Parker.findOne({ receiptnumber: receiptnumber });
        if (!existingReceipt) {
            const errorMessage = 'Receipt number not found enter correct receipt number';
            res.status(400).render('signout.pug', { error: errorMessage }); // Pass the error message to the template
            return;
        }else{
            const parksignout= new Signout(req.body);
            await parksignout.save();
            console.log(req.body);
            res.redirect('/api/signoutlist');
        }
    }
    catch(error){
        res.status(400).render('signout.pug');
        console.log(error);
    }
});

// returning data from db

router.get('/signoutlist', async (req,res) => {
    try{
        let items = await Signout.find();
        // Revenue from cars parked

       
        // req.session.totalRevenue = amount;
        // Update the app.locals.amount with the calculated amount
        // res.locals.amount = amount;
        // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
        res.render('signoutlist.pug',{parkers: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any parker signouts"});
    }
})

// delete route


router.post('/parkersignout/delete', async (req,res) => {
    try{
        await Signout.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete parker from database")
    }
})


//Updating data for signout

router.get('/parkersignout/edit/:id', async (req,res) => {
    try{
        const park = await Signout.findOne({_id: req.params.id});
        res.render('parkersignoutedit.pug', {parker:park})
    }
    catch(error){
        res.status(400).send('Could not find parker in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/parkersignout/edit', async (req,res) => {
    try{
        await Signout.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/signoutlist')
    }
    catch(error){
        res.status(400).send('Could not edit Parker signout data');
        console.log(error);
    }
})


module.exports = router