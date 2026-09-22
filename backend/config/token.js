import jwt from "jsonwebtoken"

const gentoken= async (userId)=>{
         let token=await jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"1h"})
         return token;
}

export default gentoken;