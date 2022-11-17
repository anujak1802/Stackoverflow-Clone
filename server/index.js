import {} from 'dotenv/config'
import express  from "express";
import mongoose from "mongoose";
import cors from 'cors';

import userRoutes from './routes/user.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
  res.send("Stack Overflow");
})


app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)



const port = process.env.PORT || 7000;
mongoose.connect(process.env.DB_URL)
.then(() => {
  app.listen(port, () => console.log(`Listening on port no ${port}`));
})
.catch((error)=>console.log(error));
