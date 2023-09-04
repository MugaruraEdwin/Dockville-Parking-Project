const express = require('express');
const Parker = require('../models/parkerModel');
const Signout= require('../models/parkSignout');
const Othersignout = require('../models/othersignoutModel');
const Hire = require('../models/batteryhireModel');
const Tyre = require('../models/tyreModel')
const Service = require('../models/tyreserviceModel')
const router = express.Router();



router.get('/notsignedout', async (req, res) => {
  try {
    // Query the Parker model for receipt numbers
    let items = await Parker.find();

    const total = items.length;
    const parkerReceipts = await Parker.find({ receiptnumber: { $exists: true } }, 'receiptnumber securitykey');

    // Query the Hire model for all receipt numbers
    const hireReceipts = await Signout.find({}, 'receiptnumber');

    // Query the Hireout model for all receipt numbers and security keys
    const hireoutReceipts = await Othersignout.find({}, 'receiptnumber securitykey');

    // Extract receipt numbers from the results
    const parkerReceiptNumbers = parkerReceipts.map(item => ({
      receiptnumber: item.receiptnumber,
      securitykey: item.securitykey
    }));
    const hireReceiptNumbers = hireReceipts.map(item => item.receiptnumber);
    const hireoutReceiptNumbers = hireoutReceipts.map(item => ({
      receiptnumber: item.receiptnumber,
      securitykey: item.securitykey
    }));

    // Find receipt numbers that exist in Parker and either Hire or Hireout
    const commonReceiptNumbers = parkerReceiptNumbers.filter(receipt =>
      (hireReceiptNumbers.includes(receipt.receiptnumber) || hireoutReceiptNumbers.some(item =>
        item.receiptnumber === receipt.receiptnumber || item.securitykey === receipt.securitykey
      ))
    );

    const commonReceiptCount = commonReceiptNumbers.length;

    const notSignedout = total - commonReceiptCount;

    // Render the common receipt numbers and their data
    res.render('commonReceipts.pug', { commonReceiptNumbers, commonReceiptCount, notSignedout, total });
  } catch (error) {
    res.status(400).send({ message: 'Error occurred while processing data' });
    console.log(error);
  }
});

router.get('/signedoutcars',async (req,res) => {
  try{
        let currentday = new Date().toISOString().split('T')[0];
        let items = await Signout.find({date: currentday});
        let others = await Othersignout.find({date: currentday});

        let carstoday = await Parker.find({date: currentday});
        // console.log(carstoday)

        let total= items.length + others.length;

        let notsignedout = carstoday.length - total;

          // Revenue from cars parked
          // req.session.totalRevenue = amount;
          // Update the app.locals.amount with the calculated amount
          // res.locals.amount = amount;
          // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
        res.render('signedoutcars.pug',{parkers: items, parkersother: others, total, notsignedout});
    
  }
  catch(error){
      console.log(error);
      return res.status(400).send({message: "Sorry, couldn't process the signouts"});
  }
})


router.get('/systemstatistics',async (req,res) => {
  try{
        let currentday = new Date().toISOString().split('T')[0];

        let current = await Hire.find({date: currentday})
        let batteryRevenue = current.reduce((total, hire) => total + hire.total, 0);

        let current1 = await Parker.find({date: currentday})
        let parkerRevenue = current1.reduce((total, parker) => total + parker.total, 0);

        let current2 = await Tyre.find({date: currentday})
        let tyreclinicRevenue = current2.reduce((total, tyre) => total + tyre.total, 0);

        let current3 = await Service.find({date: currentday})
        let tyreserviceRevenue = current3.reduce((total, service) => total + service.total, 0);

        let totalOverallRevenue = batteryRevenue + parkerRevenue + tyreclinicRevenue + tyreserviceRevenue;

        res.render('statistics.pug',{batteryRevenue,parkerRevenue,tyreclinicRevenue,tyreserviceRevenue, totalOverallRevenue});
  }
  catch(error){
    console.log(error);
    return res.status(400).send({message: "Sorry, couldn't process the daily system statistics "});
  }
})




  
  module.exports = router
