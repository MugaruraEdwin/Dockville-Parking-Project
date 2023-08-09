// const express = require('express');
// const Receipt = require('../models/receiptModel')
// const Hire = require('../models/batteryhireModel')
// const router = express.Router();


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

// module.exports = router