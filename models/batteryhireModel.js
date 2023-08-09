const mongoose = require('mongoose');

// Parkersignup schema

const BatterysignupSchema = new mongoose.Schema({
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
        required:true
    },
    nin:{
        type:String,
        required:true,
        trim:true
    },
    batterysize:{
        type:String,
        required:true,
        trim:true
    },
    hire:{
        type:String,
        required:true
    },
    receiptnumber:{
        type:String,
        required:true,
        unique:true
    },
    total:{
        type:Number,
        required:true,
    }

})

module.exports = mongoose.model('Hire', BatterysignupSchema)