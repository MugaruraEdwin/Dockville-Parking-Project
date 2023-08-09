const express = require('express');
const router = express.Router();
const session = require('express-session');

// Use the session middleware
router.use(session({
  secret: '123', // Replace with your own secret key
  resave: false,
  saveUninitialized: true
}));


// router.get('/dashboard', async (req,res, next) => {
//     try{
//         const totalRevenue = req.session.totalRevenue;
//         res.render('dashboard.pug',{totalRevenue});
//     }
//     catch(error){
//         next(error);
//     }
// });

router.get('/parking',(req,res) => {
    res.render('parking.pug');
});

router.get('/signout',(req,res) => {
    res.render('signout.pug');
});

router.get('/login',(req,res) => {
    res.render('login.pug');
});

router.get('/thankyou',(req,res) => {
    res.render('thankyou.pug');
});

router.get('/parkreceipt',(req,res) => {
    res.render('parkreceipt.pug');
});

router.get('/',(req,res) => {
    res.render('index.pug');
});

router.get('/batteryreceipt',(req,res) => {
    res.render('batteryreceipt.pug');
});

router.get('/batterysignout',(req,res) => {
    res.render('batterysignout.pug');
});

router.get('/tyrereceipt',(req,res) => {
    res.render('batteryreceipt.pug');
});


router.get('/tyreservices',(req,res) => {
    res.render('tyre-services.pug');
});

module.exports = router