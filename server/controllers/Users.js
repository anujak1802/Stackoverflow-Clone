import mongoose from "mongoose";
import user from '../models/users.js'

export const getAllUsers = async (req,res)=>{
    try {
        const allUser = await user.find();
        const allUserDetails =[];
        allUser.forEach(users => { 
            allUserDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedOn: users.joinedOn })
        }); 
        res.status(200).json(allUserDetails)
    } catch (error) {
        res.status(404).json(error);
    }
}

export const updateProfile = async (req,res)=>{

    const {id : _id } =req.params;
    const { name, about, tags} =req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).json("Invalid or no question available");
    }
    try {
        const updatedProfile = await user.findByIdAndUpdate(_id,{$set:{"name":name,"about":about,"tags":tags}},{new:true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json(error.messages);
    }
}

