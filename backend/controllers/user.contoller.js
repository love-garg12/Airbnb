import User from '../model/user.model.js';

export const getCurrentUser = async (req, res) => {
    try{
        let user=await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        return res.status(200).json({message:"user found",user});
    }catch(err){
        return res.status(500).json({message:`Internal Server Error in getCurrentUser controller: ${err.message}`});
    }
}