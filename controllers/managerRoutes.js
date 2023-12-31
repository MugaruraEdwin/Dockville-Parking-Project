const express = require('express');
const Manager = require('../models/managerModel');
const passport = require('passport');
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');

// get employee signup route

router.get('/signup',(req,res) => {
    res.render('signup.pug');
});

// posting data to form 

router.post('/regmanager', async (req,res) => {
    try{
        const managersignup = new Manager(req.body);
        console.log(req.body);

        await Manager.register(managersignup,req.body.password);
        res.redirect('/api/login');

    }
    catch(error){
        res.status(400).send({message: 'Failed to register Manager'});
        console.log(error);
    }
});

// get route for login page 

router.get('/login',(req,res) => {
    res.render('login.pug');
});

// post route to check for authentication

router.post('/login', passport.authenticate('local', 
{failureRedirect:'/api/login'}),
(req,res) => {
    req.session.user= req.user
    let loggedinUser = req.session.user.firstname;
    // let loggedinUserPicture = req.session.user.picture;
    // const base64String = loggedinUserPicture.toString('base64');
    console.log(loggedinUser)
    // console.log(base64String)
    // res.render('dashboard.pug', {inUser:loggedinUser})
    // if(req.session.user.role === 'director'){
    //     res.render('dashboard.pug');
    // }
    // }else if(req.session.user.role === 'manager'){
    //     res.render('manager_.pug',{inUser:loggedinUser});
    // }else if(req.session.user.role === 'salesagent'){
    //     res.render('salesagent_.pug');
    // }
    res.redirect('/api/dashboard'); // if a variable being parsed in and the one being parsed into are the same we can remove the full colon (if they are different we put a full colon)
}
)

// logout

router.get('/logout', (req,res) => {
    req.session.destroy(
        () => {res.redirect('/api/')}
    )
});


// returning manager data from db in table format

router.get('/list', ensureLoggedIn('/api/login'), async (req,res) => {
    try{
        req.session.user = req.user;
        if(req.session.user.role === 'toplevel'){
            let items = await Manager.find();
            res.render('managerlist.pug',{managers: items});
        }else{
            const message = 'Access restricted to top-level managers'
            res.render('login.pug', {alert:message})
        }
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry, couldn't retrieve any manager"});
    }
})

// delete route 

router.post('/manager/delete', async (req,res) => {
    try{
        await Manager.deleteOne({_id:req.body.id});
        res.redirect('back');
    }
    catch(error){
        res.status(400).send("Unable to delete manager from database")
    }
})
 
// update route

// first get form 

router.get('/manager/edit/:id', async (req,res) => {
    try{
        const manage = await Manager.findOne({_id: req.params.id});
        res.render('manageredit.pug', {manager:manage})
    }
    catch(error){
        res.status(400).send('Could not find manager in the database');
        console.log(error);
    }
})

// edit it rather post back the data 

router.post('/manager/edit', async (req,res) => {
    try{
        await Manager.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect('/api/list')
    }
    catch(error){
        res.status(400).send('Could not edit Manager data');
        console.log(error);
    }
})

module.exports = router