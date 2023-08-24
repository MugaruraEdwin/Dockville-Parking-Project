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

module.exports = router