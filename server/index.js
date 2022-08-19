import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app=express();

app.use(express.json({limit:"30mb",exteneded:true}))
app.use(express.urlencoded({limit:"30mb",exteneded:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is TeachMeHow website")
})

const PORT=process.env.PORT || 5000