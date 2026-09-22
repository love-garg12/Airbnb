import bcrypt from 'bcryptjs';
import gentoken from '../config/token.js';
import User from '../model/user.model.js';

export const signUp = async (req, res) => {
    try{
          let { name, email, password } = req.body;
          let existUser=await User.findOne({ email });
          if(existUser){
              return res.status(400).json({ message: "User already exists" });
          }
          let hashedPassword = await bcrypt.hash(password, 12);
          let user = await User.create({
              name,
              email,
              password: hashedPassword
          });
          let token = await gentoken(user._id);
          res.cookie("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
          });
          
          return res.status(201).json(user);    
    }catch(error){
        return res.status(500).json({ message: `signup error: ${error}` });
    }
}

export  const logIn=async (req,res)=>{
    try{
          const {email,password}=req.body;
          const user=await User.findOne({email});
          if(!user){
            return res.status(400).json({message:"User not found"});
          }
          const isPasswordCorrect=await bcrypt.compare(password,user.password);
          if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"});
          }
          let token=await gentoken(user._id);
          res.cookie("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
          });
          return res.status(201).json(user);
    }catch(error){
        return res.status(500).json({ message: `login error: ${error}` });
    }

}

export const logOut=async (req,res)=>{
   try{
        res.clearCookie("token");
    return res.status(200).json({message:"Logged out successfully"});
   }catch(error){
    return res.status(500).json({ message: `logout error: ${error}` });
   }
}