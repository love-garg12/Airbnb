import uploadOnCloudinary from "../config/cloudinary.js";
import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addListing = async (req, res) => {
    try{
          let host =req.userId;
          let {title,description,rent,city,category} = req.body;
          let landMark = req.body.landMark ?? req.body.landmark;
          let image1=await uploadOnCloudinary(req.files.image1[0].path)
          let image2=await uploadOnCloudinary(req.files.image2[0].path)
          let image3=await uploadOnCloudinary(req.files.image3[0].path)

          let listing = await Listing.create({
            title,
            description,
            rent,
            city,
            landMark,
            category,
            image1,
            image2,
            image3,
            host
          })

          
          let user = await User.findByIdAndUpdate(host,{ $push: { listings: listing._id }},{ new: true });
        
          if(!user){
            res.status(404).json({message:"User not found"})
          }
          
          res.status(201).json({message:"Listing added successfully",listing})

    }catch(err){
        res.status(500).json({message:"Error adding listing", error: err.message})
    }
}