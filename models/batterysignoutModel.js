const mongoose = require('mongoose');

// Battery Signout schema

const BatterysignoutSchema = new mongoose.Schema({
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
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
  
})

module.exports = mongoose.model('Hireout', BatterysignoutSchema)