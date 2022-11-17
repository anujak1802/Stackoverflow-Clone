import mongoose from "mongoose";
import Questions from '../models/Questions.js'

export const AskQuestions = async (req,res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const QuestionData = new Questions({...postQuestionData,userId});
    try {
        const Question = await QuestionData.save();
        res.status(200).json("Question Posted successfully");        
    } catch (error) {
        res.status(409).json("Couldn't post question");
    }
}
export const getAllQuestions = async ( req, res ) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json("Somethings wrong with getting data")
    }
}


export const deleteQuestion = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteQuestion = await Questions.findByIdAndRemove(id);
        res.status(200).json("Question deleted successfully");        
    } catch (error) {
        res.status(409).json("Couldn't delete question");
    }
}

export const voteQuestion = async (req,res) =>{
    const {id} = req.params
    const {value} = req.body
    const userId = req.userId

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json("Invalid or no question available");
    }
    try {
        let question = await Questions.findById(id);
        const upIndex = question.upVote.findIndex((id)=>id === String(userId))
        const downIndex = question.downVote.findIndex((id)=>id === String(userId))
        if(value === 'upVote')
        {
            if(downIndex!==-1)
            {
                question.downVote = question.downVote.filter((id)=>id!==String(userId));
            }
            if(upIndex === -1)
            {
                question.upVote.push(userId)
            }
            else 
            {
                question.upVote = question.upVote.filter((id)=>id!==String(userId))
            }
        }   
        else if(value==="downVote")
        {
            if(upIndex!==-1)
            {
                question.upVote = question.upVote.filter((id)=>id!==String(userId));
            }
            if(downIndex === -1)
            {
                question.downVote.push(userId)
            }
            else 
            {
                question.downVote =question.downVote.filter((id)=>id!==String(userId))
            }
           
        }   

        await Questions.findByIdAndUpdate(id,question);
        res.status(200).json({message:"voted successfully"})
    } catch (error) {
        res.status(404).json({message:"Wasn't able to vote"})
    }
}