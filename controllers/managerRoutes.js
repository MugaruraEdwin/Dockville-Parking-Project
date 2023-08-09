const express = require('express');
const Manager = require('../models/managerModel');
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

// delete route 

router.post('/manager/delete', async (req,res) => {
    try{
        await Manager.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete manager from database")
    }
})
 
// update route

// first get form 

router.get('/manager/edit', async (req,res) => {
    try{
        const manage = await Manager.findOne({_id: req.params.id});
    }
    catch(error){

    }
})

module.exports = router