const express = require('express');
const Othersignout = require('../models/othersignoutModel');
const Parker = require('../models/parkerModel')
const router = express.Router();

router.get('/othersignout',(req,res) => {
    res.render('othersignout.pug');
});

// posting car park signouts 

router.post('/othersignouts', async (req,res) => {
    try{
        // const receiptnumber = req.body.receiptnumber; // Picking up receipt number being registered for signout
        const securitykey = req.body.securitykey;
        // Check if the receipt number exists in the Parker model
        const existingReceipt = await Parker.findOne({ securitykey: securitykey });
        if (!existingReceipt) {
            const errorMessage = 'Security key not found enter correct key';
            res.status(400).render('othersignout.pug', { error: errorMessage }); // Pass the error message to the template
            return;
        }else{
            const othersignout= new Othersignout(req.body);
            await othersignout.save();
            console.log(req.body);
            res.redirect('/api/othersignoutlist');
        }
    }
    catch(error){
        res.status(400).render('othersignout.pug');
        console.log(error);
    }
});

// returning data from db

router.get('/othersignoutlist', async (req,res) => {
    try{
        let items = await Othersignout.find();
        // Revenue from cars parked

       
        // req.session.totalRevenue = amount;
        // Update the app.locals.amount with the calculated amount
        // res.locals.amount = amount;
        // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
        res.render('othersignoutlist.pug',{parkers: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any parker signouts"});
    }
})


// delete route


router.post('/othersignout/delete', async (req,res) => {
    try{
        await Othersignout.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete parker from database")
    }
})


//Updating data for signout

router.get('/othersignout/edit/:id', async (req,res) => {
    try{
        const park = await Othersignout.findOne({_id: req.params.id});
        res.render('othersignoutedit.pug', {parker:park})
    }
    catch(error){
        res.status(400).send('Could not find parker in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/othersignout/edit', async (req,res) => {
    try{
        await Othersignout.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/othersignoutlist')
    }
    catch(error){
        res.status(400).send('Could not edit Parker signout data');
        console.log(error);
    }
})





module.exports = router