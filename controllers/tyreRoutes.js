const express = require('express');
const Tyre = require('../models/tyreModel');
const router = express.Router();


router.get('/tyreclinic',(req,res) => {
    res.render('tyre-clinic.pug');
});

// posting data to form

router.post('/regtyre', async (req,res) => {
    try{
        const tyresignup = new Tyre(req.body);
        await tyresignup.save();
        console.log(req.body);
        res.redirect('/api/tyrereceipt');

    }
    catch(error){
        res.status(400).render('tyre-clinic.pug');
        console.log(error);
    }
});

// returning tyres register data from db in table format

router.get('/tyrelist', async (req,res) => {
    try{
        let items = await Tyre.find();
        res.render('tyrelist.pug',{tyres: items});
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any tyre"});
    }
})

// delete route 



module.exports = router