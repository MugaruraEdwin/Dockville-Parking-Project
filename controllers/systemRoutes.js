const express = require('express');
const router = express.Router();



router.get('/dashboard',(req,res) => {
    res.render('dashboard.pug');
});

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

router.get('/batteryservices',(req,res) => {
    res.render('batterysection.pug');
});

router.get('/batterysignout',(req,res) => {
    res.render('batterysignout.pug');
});

router.get('/tyreclinic',(req,res) => {
    res.render('tyre-clinic.pug');
});

router.get('/tyreservices',(req,res) => {
    res.render('tyre-services.pug');
});

module.exports = router