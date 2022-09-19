const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    status:{
        type:Boolean,   
        default:true
    }
      
},{timestamps:true})

const user = mongoose.model('User',userschema)

module.exports=user 