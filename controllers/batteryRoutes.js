const express = require('express');
const Hire = require('../models/batteryhireModel');
// const Receipt = require('../models/receiptModel')
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');

// get battery register route

router.get('/batteryservices', ensureLoggedIn('/api/login'),(req,res) => {
    req.session.user = req.user;
    if(req.session.user.role === 'battery' || req.session.user.role === 'toplevel' ){
        res.render('batterysection.pug');
    }else{
        const message = 'Access restricted to battery section managers'
        res.render('login.pug', {alert:message})
    }
});

// posting data to form 

router.post('/regbattery', async (req,res) => {
    try{
        const batteryhire = new Hire(req.body);
        await batteryhire.save();
        console.log(req.body);
        res.redirect('/api/batterylist');

    }
    catch(error){
        res.status(400).render('batterysection.pug');
        console.log(error);
    }
});

// returning battery data from db in table format

router.get('/batterylist', ensureLoggedIn('/api/login'),async (req,res) => {
    try{
        req.session.user = req.user;
        if(req.session.user.role === 'battery' || req.session.user.role === 'toplevel' ){
            let items = await Hire.find();

            let totalParked = items.length

            let revenue = items.reduce((total, parker) => total + parker.total, 0);
            res.render('batterylist.pug',{hires: items,  total:totalParked, revenue});
        }else{
            const message = 'Access restricted to battery section managers'
            res.render('login.pug', {alert:message})
        }
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any battery"});
    }
})


// current day revenue

router.get('/currentbatteryrevenue', async(req,res) => {
    try{
      
        let currentday = new Date().toISOString().split('T')[0];
        let current = await Hire.find({date: currentday})
 
        let dRevenue = current.reduce((total, hire) => total + hire.total, 0);

        console.log(current)
        res.render('dailybatteryrevenue.pug', {hires: current, dRevenue})
    }
    catch(error){
        res.status(400).send({message: 'Can not find battery hires for that specific date'})
        console.log(error)
    }
    
})


// delete battery hire route

router.post('/hire/delete', async (req,res) => {
    try{
        await Hire.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete battery hire from database")
    }
})

// Edit battery hire

// first get form 

router.get('/hire/edit/:id', async (req,res) => {
    try{
        const hired = await Hire.findOne({_id: req.params.id});
        res.render('hireedit.pug', {hire:hired})
    }
    catch(error){
        res.status(400).send('Could not find any hired batteries in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/hire/edit', async (req,res) => {
    try{
        await Hire.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/batterylist')
    }
    catch(error){
        res.status(400).send('Could not edit Battery hire data');
        console.log(error);
    }
})


// receipt route
router.get('/battery/receipt/:id', async (req,res) => {
    try{
        const receipt = await Hire.findOne({_id: req.params.id});
        res.render('batteryreceipt.pug', {invoice:receipt})
    }
    catch(error){
        res.status(400).send('Could not generate any receipts from the database');
        console.log(error);
    }
})



module.exports = router