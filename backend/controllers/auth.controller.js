import bcrypt from 'bcryptjs';
import gentoken from '../config/token';

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
          gentoken
          return res.status(201).json({ message: "User created successfully" });    
    }catch(error){
        return res.status(500).json({ message: "Something went wrong" });
    }
}