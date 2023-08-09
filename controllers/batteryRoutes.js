const express = require('express');
const Hire = require('../models/batteryhireModel');
const Receipt = require('../models/receiptModel')
const router = express.Router();

// get battery register route

router.get('/batteryservices',(req,res) => {
    res.render('batterysection.pug');
});

// posting data to form 

router.post('/regbattery', async (req,res) => {
    try{
        const batteryhire = new Hire(req.body);
        await batteryhire.save();
        console.log(req.body);
        res.redirect('/api/batteryreceipt');

    }
    catch(error){
        res.status(400).render('batterysection.pug');
        console.log(error);
    }
});

// returning manager data from db in table format

router.get('/batterylist', async (req,res) => {
    try{
        let items = await Hire.find();
        res.render('batterylist.pug',{hires: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any battery"});
    }
})


// router.get('/batteryreceipt',(req,res) => {
//     res.render('batteryreceipt.pug');
// })


// router.get('/receipt/:receiptId', async (req, res) => {
//     try {
//         const receipt = await Receipt.findById(req.params.receiptId);
//         if (!receipt) {
//             return res.status(404).send('Receipt not found');
//         }
//         const hires = await Hire.find(); // Fetch data from Hire schema
//         console.log(hires);
//         res.render('batteryreceipt', { receipt, hires }); // Pass both receipt and hires data
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred');
//     }
// });

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