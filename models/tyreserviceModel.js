const mongoose = require('mongoose');

// creating tyre service class

const TyreserviceSchema = new mongoose.Schema({

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
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true,
        trim:true
    },
    phonenumber:{
        type:String,
        required:true,
        trim:true
    },
    receiptnumber:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    tyreservice:[ {type:String} ],

    total:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model('Service', TyreserviceSchema)