const express = require('express');
const Parker = require('../models/parkerModel');
const router = express.Router();
const session = require('express-session');

// Use the session middleware
router.use(session({
  secret: '123', // Replace with your own secret key
  resave: false,
  saveUninitialized: true
}));

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
        // Revenue from cars parked

       
        // req.session.totalRevenue = amount;
        // Update the app.locals.amount with the calculated amount
        // res.locals.amount = amount;
        // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
        res.render('parkerlist.pug',{parkers: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any parker"});
    }
})

// for global access

// router.get('/general',  async (req,res) => {

    
// }) 


router.get('/dashboard', async (req,res, next) => {
    try{
        let day = await Parker.aggregate([
            // grouping by id, can also be grouped by name / category or otherwise
            {$match: { 
                park : 'day'
            }},
            {
                $group: {
                _id: '$all',
                revenue: { $sum: '$total'}
                // dayparkers: {$sum: 1}

            }
            }
            // let ages =  group{totalAge{sum}}
            // If I create another array, then thats when I would move to array index[1], basing on which the groups
             ])

        let totalRevenue = await Parker.aggregate([
            {
                $group:{
                    _id: '$all',
                    totalRevenue:{$sum:'$total'},
                    totalcars:{$sum: 1}

                }
            }
        ])
        let amount = totalRevenue[0].totalRevenue;
        let totalCars = totalRevenue[0].totalcars;
        let dayRevenue = day[0].revenue
        console.log(dayRevenue);
        res.render('dashboard.pug',{amount,totalCars,dayRevenue});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any amounts"});
    }
});

// delete route


router.post('/parker/delete', async (req,res) => {
    try{
        await Parker.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete parker from database")
    }
})

// update route

// first get form 

router.get('/parker/edit/:id', async (req,res) => {
    try{
        const park = await Parker.findOne({_id: req.params.id});
        res.render('parkeredit.pug', {parker:park})
    }
    catch(error){
        res.status(400).send('Could not find parker in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/parker/edit', async (req,res) => {
    try{
        await Parker.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/parkerlist')
    }
    catch(error){
        res.status(400).send('Could not edit Parker data');
        console.log(error);
    }
})





module.exports = router