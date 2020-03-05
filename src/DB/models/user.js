const Joi = require('joi');
const mongoose = require('mongoose');
const {OCCUPATION} = require('../../constants')
const User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
   password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    location:{
      type:String,
    },
    country:{
      type:String,
    },
    occupation:{
      type:String,
      enum: OCCUPATION
    },
    isVarified:{
      type:Boolean,
      default:false
    },
    phone:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
     },
},{timestamps:true}));
function validateUser(user){
    const schema = {
        email: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(5).max(255).required(),
        phone : Joi.string().min(5).max(255).required(),
    };
    return Joi.validate(user, schema);
}
exports.User = User;
exports.validate = validateUser;






