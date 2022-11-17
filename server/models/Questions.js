import mongoose from 'mongoose'

const questionsSchema = new mongoose.Schema({
    upVote: {type:[String],default:[]},
    downVote:{type:[String],default:[]},
    noOfAnswers: {type:Number,default:0},
    questionTitle: {type:String,required:true},
    questionBody: {type:String,required:true},
    questionTags: {type:[String],required:true},
    userPosted: {type:String,required:true},
    userId: {type:String},
    askedOn: {type:Date, default:Date.now},
    answer: [{
        answerBody: {type:String,required:true},
        userAnswered: {type:String,required:true},
        answeredOn: {type:Date, default:Date.now},
        userId: {type:String}
    }]
})

const question = mongoose.model("Question",questionsSchema);

export default question;