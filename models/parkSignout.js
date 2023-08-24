const mongoose = require('mongoose');

// Parkersignup schema

const ParkersignoutSchema = new mongoose.Schema({
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
    receiptnumber:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:String,
        required:true,
        trim:true
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    nin:{
        type:String,
        required:true,
        trim:true
    },
  

})

module.exports = mongoose.model('Signout', ParkersignoutSchema)