const express = require('express');
const Parker = require('../models/parkerModel');
const router = express.Router();

// get parker register route

router.get('/register',(req,res) => {
    res.render('register.pug');
});

// posting data to form

router.post('/regparker', async (req,res) => {
    try{
        const parkersignup = new Parker(req.body);
        await parkersignup.save();
        console.log(req.body);
        res.redirect('/api/parkreceipt');

    }
    catch(error){
        res.status(400).render('register.pug');
        console.log(error);
    }
});

// returning data from db

router.get('/parkerlist', async (req,res) => {
    try{
        let items = await Parker.find();
        res.render('parkerlist.pug',{parkers: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any parker"});
    }
})


module.exports = router