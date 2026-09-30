import jwt from "jsonwebtoken";
const isAuth=async (req, res, next) => {
    try{
         let {token}=req.cookies;
            if(!token){     
                return res.status(400).json({message:"user does not have a token"});
            }
            let verifyToken=jwt.verify(token,process.env.JWT_SECRET);
            if(!verify){
                return res.status(400).json({message:"user does not have a valid token"});
            }
            res.userId=verifyToken.userId;
            next();
    }catch(err){
        return res.status(500).json({message:`Internal Server Error in isAuth middleware: ${err.message}`});
    }
}

export default isAuth;