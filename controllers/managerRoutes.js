const express = require('express');
const Manager = require('../models/managersignupModel');
const router = express.Router();

// get employee signup route

router.get('/signup',(req,res) => {
    res.render('signup.pug');
});

// posting data to form 

router.post('/regmanager', async (req,res) => {
    try{
        const managersignup = new Manager(req.body);
        await managersignup.save();
        console.log(req.body);
        res.redirect('/api/thankyou');

    }
    catch(error){
        res.status(400).render('signup.pug');
        console.log(error);
    }
});

// returning manager data from db in table format

router.get('/list', async (req,res) => {
    try{
        let items = await Manager.find();
        res.render('managerlist.pug',{managers: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any manager"});
    }
})

module.exports = router