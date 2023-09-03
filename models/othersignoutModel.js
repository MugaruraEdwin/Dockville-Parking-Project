const mongoose = require('mongoose');

// Parkersignup schema

const OthersignoutSchema = new mongoose.Schema({
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
    securitykey:{
        type:String,
        required:true,
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

module.exports = mongoose.model('Othersignout', OthersignoutSchema)