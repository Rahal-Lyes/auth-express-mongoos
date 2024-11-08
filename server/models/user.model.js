import mongoose from 'mongoose';


const userSchema=new mongoose.Schema({
  email:{
    type:string,
    required:true,
    unique:true
  },
  password:{
    type:string,
    required:true
  },
  name:{
    type:string,
    required:true
  },
  lastLogin:{
    type:Date,
    default:Date.now
  },
  isVerified:{
    type:boolean,
    default:false 
  },
  resetPasswordToken:string,
  resetPasswordExpiresAt:Date,
  verificationToken:string,
  verificationTokenExpireAt:Date

},{timestamps:true})



export const User=mongoose.model('User',userSchema);