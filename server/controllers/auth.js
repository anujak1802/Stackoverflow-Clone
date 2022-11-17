import  user from "../models/users.js"
import  jwt  from "jsonwebtoken"
import bcrypt from 'bcrypt'


export const signup =async (req,res) =>{
    const {name, email, password} = req.body
    try {
        const existingUser = await user.findOne({email})
        
        if(existingUser)
        {
            return res.status(404).json("User already exist")
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = await user.create({name, email, password:hashPassword})
        const token = jwt.sign({email:newUser.email, id:newUser._id},process.env.JWT_PASS,{expiresIn:"1h"})
        res.status(200).json({result: newUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong ");
    }
    
}

export const login = async(req,res) =>{
    const {email, password} = req.body;
    try {
        const existingUser = await user.findOne({email})
       if(!existingUser)
       {
        return res.status(404).json("User does not exist")
       }
       const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
       if(!isPasswordCorrect)
       {
        return res.status(401).json("Wrong Credentials"); 
       }
       const token = jwt.sign({email:existingUser.email, id:existingUser._id},process.env.JWT_PASS,{expiresIn:"1h"})
       res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong");        
    }
}
