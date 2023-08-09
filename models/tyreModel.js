const mongoose = require('mongoose');

// Tyre Schema

const TyreSchema = new mongoose.Schema({
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
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true,
        trim:true
    },
    receiptnumber:{
        type:String,
        required:true,
        unique:true
    },
    tyresize:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        trim:true
    },
    carmodel:{
        type:String,
        required:true,
        trim:true
    },
    total:{
        type:Number,
        required:true,
    }
})


module.exports = mongoose.model('Tyre', TyreSchema)