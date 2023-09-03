const mongoose = require('mongoose');

// Parkersignup schema

const ParkersignupSchema = new mongoose.Schema({
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
    numberplate:{
        type:String,
        required:true,
        trim:true
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    model:{
        type:String,
        required:true,
        trim:true
    },
    time:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true
    },
    securitykey:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true,
        trim:true
    },
    park:{
        type:String,
        required:true,
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

module.exports = mongoose.model('Parker', ParkersignupSchema)