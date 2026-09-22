import jwt from "jsonwebtoken"

const gentoken= async (userId)=>{
        try{
             let token=await jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
         return token;
        }catch(error){
            console.log("token error");
        }
}

export default gentoken;