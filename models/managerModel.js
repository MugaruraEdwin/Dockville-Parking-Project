const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Managersignup schema

const SignupSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    picture: {
          type: Buffer,
          contentType:String,
          required: true,
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

})

SignupSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('Manager', SignupSchema)