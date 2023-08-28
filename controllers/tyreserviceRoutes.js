const express = require('express');
const Service = require('../models/tyreserviceModel')
const router = express.Router();


router.get('/tyreservices',(req,res) => {
    res.render('tyre-services.pug');
});

router.post('/regtyreservice', async (req,res) => {
    try{
        const service = new Service(req.body);
        await service.save();
        console.log(req.body);
        res.redirect('/api/tyreservicelist')
    }
    catch(error){
        res.status(400).render('tyre-services.pug');
        console.log(error)
    }
})


// return services registered from the database 

router.get('/tyreservicelist', async (req,res) => {
    try{
        let items = await Service.find();
        console.log(items)
        res.render('tyreservicelist.pug',{services: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any tyre service"});
    }
})

// deleting a service 

router.post('/tyreservice/delete', async (req,res) => {
    try{
        await Service.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete tyre service from database")
    }
})

// editing a service 

// first get form 

router.get('/tyreservice/edit/:id', async (req,res) => {
    try{
        const park = await Service.findOne({_id: req.params.id});
        res.render('tyreserviceedit.pug', {service:park})
    }
    catch(error){
        res.status(400).send('Could not find tyre service in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/tyreservice/edit', async (req,res) => {
    try{
        await Service.findOneAndUpdate({_id: req.query.id},req.body);
        console.log(req.body)
        res.redirect('/api/tyreservicelist')
    }
    catch(error){
        res.status(400).send('Could not edit Battery service data');
        console.log(error);
    }
})

// receipt route
router.get('/tyreservice/receipt/:id', async (req,res) => {
    try{
        const receipt = await Service.findOne({_id: req.params.id});
        res.render('tyreservicereceipt.pug', {invoice:receipt})
    }
    catch(error){
        res.status(400).send('Could not generate any receipts from the database');
        console.log(error);
    }
})

module.exports = router