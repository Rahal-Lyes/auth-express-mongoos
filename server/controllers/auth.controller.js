// Déclaration des contrôleurs pour chaque action
import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
  const{email,password,name}=req.body;
  try {
    if(!email  || !password || !name){
      throw new Error("All fields are required");
    }
    userExiste=await User.findOne({email});
    if(userExiste){
      return res.status(400).json({success:false,message:"user already existe"})
    }
    const hashPassword= await bcryptjs.hash(password,10);
const verificationToken=  Math.floor(10000 +Math.random() *900000).toString();
    const user=new User({
      email,
      password:hashPassword,
      name,
      verificationToken,
      verificationTokenExpireAt:Date.now()+24 *60*60*1000
    })
    await user.save();
  } catch (error) {
    res.status(400).json({success:false,message:error.message});
  }
  
  

};

export const login = async (req, res) => {
  res.send("login successfully");
};

export const logout = async (req, res) => {
  res.send("logout successfully");
};
