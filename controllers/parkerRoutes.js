const express = require('express');
const Parker = require('../models/parkerModel');
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');

// const session = require('express-session');

// Use the session middleware
// router.use(session({
//   secret: '123', // Replace with your own secret key
//   resave: false,
//   saveUninitialized: true
// }));

// get parker register route

router.get('/register', ensureLoggedIn('/api/login'),(req,res) => {
    req.session.user = req.user;
    if(req.session.user.role === 'parking' || req.session.user.role === 'toplevel' ){
        res.render('register.pug');
    }else{
        const message = 'Access restricted to parking managers'
        res.render('login.pug', {alert:message})
    }
});

// posting data to form

router.post('/regparker', async (req,res) => {
    try{
        const parkersignup = new Parker(req.body);
        await parkersignup.save();
        console.log(req.body);
        res.redirect('/api/parkerlist');

    }
    catch(error){
        res.status(400).render('register.pug');
        console.log(error);
    }
});

// returning data from db

router.get('/parkerlist', ensureLoggedIn('/api/login'),async (req,res) => {
    try{
        req.session.user = req.user;
        if(req.session.user.role === 'parking' || req.session.user.role === 'toplevel' ){
            let items = await Parker.find();
            // Revenue from cars parked
            totalParked = items.length

            let revenue = items.reduce((total, parker) => total + parker.total, 0);

        
            // req.session.totalRevenue = amount;
            // Update the app.locals.amount with the calculated amount
            // res.locals.amount = amount;
            // res.render('dashboard.pug',{parkRevenue:revenue[0].totalRevenue})
            console.log(totalParked)
            res.render('parkerlist.pug',{parkers: items, total:totalParked, revenue});
        }else{
            const message = 'Access restricted to parking managers'
            res.render('login.pug', {alert:message})
        }
    }

    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any parker"});
    }
})

// for global access

// router.get('/general',  async (req,res) => {

    
// }) 


router.get('/dashboard', ensureLoggedIn('/api/login'), async (req,res, next) => {
    try{
        req.session.user = req.user;
        let loggedinUser = req.session.user.firstname;
        // let loggedinUserPicture = req.session.user.picture;
        // const base64String = loggedinUserPicture.toString('base64');
        let currentday = new Date().toISOString().split('T')[0];
        // let currentday = new Date().toISOString();

       
        let current = await Parker.find({date: currentday})
        // number of cuurent day parkers
        console.log(current)
        let numberOfDocuments = current.length;
        // total revenue from current day parkers
        let dRevenue = current.reduce((total, parker) => total + parker.total, 0);

        let documentsWithDay = current.filter(parker => parker.park === 'day');

        
        // let numberOfDocumentsWithDay = documentsWithDay.length;

        // Filter documents with the specific day
        // let documentsWithDay = current.filter(parker => parker.park === 'day');

        // Calculate the sum of 'total' values for the filtered documents
        let totalForDay = documentsWithDay.reduce((total, parker) => total + parker.total, 0);

        // Assuming current contains the data from the Parker.find query

      
        // let day = await Parker.aggregate([
        //     // grouping by id, can also be grouped by name / category or otherwise
        //     {$match: { 
        //         park : 'day'
        //     }},
        //     {
        //         $group: {
        //         _id: '$all',
        //         revenue: { $sum: '$total'}
        //         // dayparkers: {$sum: 1}

        //     }
        //     }
        //     // let ages =  group{totalAge{sum}}
        //     // If I create another array, then thats when I would move to array index[1], basing on which the groups
        //      ])

        // let totalRevenue = await Parker.aggregate([
        //     {
        //         $group:{
        //             _id: '$all',
        //             totalRevenue:{$sum:'$total'},
        //             totalcars:{$sum: 1}

        //         }
        //     }
        // ])
        

        // let amount = totalRevenue[0].totalRevenue;
        // let totalCars = totalRevenue[0].totalcars;
        // let dayRevenue = day[0].revenue;
        console.log(dRevenue);
        res.render('dashboard.pug',{totalForDay,numberOfDocuments,dRevenue,inUser:loggedinUser});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any amounts"});
    }
});

// weekly revenue

router.get('/weeklyrevenue', async(req,res) => {
  const currentDay = new Date();
  const dayOfWeek = currentDay.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

  const daysToSubtract = dayOfWeek >= 5 ? 7 + 1 : dayOfWeek + 1;
  const startDate = new Date(currentDay);
  startDate.setDate(startDate.getDate() - daysToSubtract);

  const queryPromises = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    const formattedDate = currentDate.toISOString().split('T')[0];

    queryPromises.push(Parker.find({ date: formattedDate }));
  }

  try {
    const results = await Promise.all(queryPromises);
    const usersForPastWeek = results.flat(); // Merge the arrays of users
    console.log(usersForPastWeek);
    let dRevenue = usersForPastWeek.reduce((total, parker) => total + parker.total, 0);
    res.render('weekly.pug',{parkers:usersForPastWeek,dRevenue});
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
)

// current day revenue

router.get('/currentrevenue', async(req,res) => {
    try{
        // const startDate = new Date();
        // startDate.setHours(0, 0, 0, 0); // Set time to midnight

        // // Create a date object for the end of the target date
        // const endDate = new Date();
        // endDate.setHours(23, 59, 59, 999);


        let currentday = new Date().toISOString().split('T')[0];
        let current = await Parker.find({date: currentday})


 
        let dRevenue = current.reduce((total, parker) => total + parker.total, 0);

        console.log(current)
        res.render('currentparkrevenue.pug', {parkers: current, dRevenue})
    }
    catch(error){
        res.status(400).send({message: 'Can not find parkers for that specific date'})
        console.log(error)
    }
    
})

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


// receipt route
router.get('/parker/receipt/:id', async (req,res) => {
    try{
        const receipt = await Parker.findOne({_id: req.params.id});
        res.render('parkerreceipt.pug', {invoice:receipt})
    }
    catch(error){
        res.status(400).send('Could not generate any receipts from the database');
        console.log(error);
    }
})





module.exports = router