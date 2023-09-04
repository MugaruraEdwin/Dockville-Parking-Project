const express = require('express');
const Tyre = require('../models/tyreModel');
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');


router.get('/tyreclinic', ensureLoggedIn('/api/login'),(req,res) => {
    req.session.user = req.user;
    if(req.session.user.role === 'tyre' || req.session.user.role === 'toplevel' ){
        res.render('tyre-clinic.pug');
    }else{
        const message = 'Access restricted to tyre section managers'
        res.render('login.pug', {alert:message})
    }
});

// posting data to form

router.post('/regtyre', async (req,res) => {
    try{
        const tyresignup = new Tyre(req.body);
        await tyresignup.save();
        console.log(req.body);
        res.redirect('/api/tyrelist');

    }
    catch(error){
        res.status(400).render('tyre-clinic.pug');
        console.log(error);
    }
});

// returning tyres register data from db in table format

router.get('/tyrelist', ensureLoggedIn('/api/login'),async (req,res) => {
    try{
        req.session.user = req.user;
        if(req.session.user.role === 'tyre' || req.session.user.role === 'toplevel' ){
            let items = await Tyre.find();
            res.render('tyrelist.pug',{tyres: items});
        }else{
            const message = 'Access restricted to tyre section managers'
            res.render('login.pug', {alert:message})
        }
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any tyre"});
    }
})


// current day revenue

router.get('/currenttyrerevenue', async(req,res) => {
    try{
      
        let currentday = new Date().toISOString().split('T')[0];
        let current = await Tyre.find({date: currentday})
 
        let dRevenue = current.reduce((total, tyre) => total + tyre.total, 0);

        console.log(current)
        res.render('dailycarclinicrevenue.pug', {tyres: current, dRevenue})
    }
    catch(error){
        res.status(400).send({message: 'Can not find tyres for that specific date'})
        console.log(error)
    }
    
})

// delete route 

router.post('/tyre/delete', async (req,res) => {
    try{
        await Tyre.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete tyre from database")
    }
})

// editing route 

// first get form 

router.get('/tyre/edit/:id', async (req,res) => {
    try{
        const tire= await Tyre.findOne({_id: req.params.id});
        res.render('tyreedit.pug', {tyre:tire})
    }
    catch(error){
        res.status(400).send('Could not find tyre in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/tyre/edit', async (req,res) => {
    try{
        await Tyre.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/tyrelist')
    }
    catch(error){
        res.status(400).send('Could not edit Tyre data');
        console.log(error);
    }
})


// receipt route
router.get('/tyre/receipt/:id', async (req,res) => {
    try{
        const receipt = await Tyre.findOne({_id: req.params.id});
        res.render('tyresizereceipt.pug', {invoice:receipt})
    }
    catch(error){
        res.status(400).send('Could not generate any receipts from the database');
        console.log(error);
    }
})

module.exports = router