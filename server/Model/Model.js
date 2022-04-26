const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const areaSchema = new Schema({
    pincode:{type:Number, required:true},
    zone:{type:String, required:true},

});


module.exports =  mongoose.model("Area", areaSchema)