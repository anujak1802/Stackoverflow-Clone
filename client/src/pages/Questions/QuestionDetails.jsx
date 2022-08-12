import React from 'react'
import { useParams,Link } from 'react-router-dom'
import upvote from '../../assests/caret-up-solid.svg'
import downvote from '../../assests/caret-down-solid.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {
    const { id } = useParams()
    var questionsList = [{
        _id: '1',
        upVote: 3,
        downVote: 2,
        noOfAnswers: 2,
        QuestionTitle: 'What is function?',
        QuestionBody: 'It meant to be',
        questionTags: ['java', 'nodejs', 'mongodb', 'reactjs'],
        userPosted: 'mano',
        userId: 1,
        time: 'Jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: 2
        }]
    }, {
        _id: '2',
        upVote: 0,
        downVote: 2,
        noOfAnswers: 2,
        QuestionTitle: 'What is function?',
        QuestionBody: 'It meant to be',
        questionTags: ['java', 'nodejs', 'mongodb', 'reactjs'],
        userPosted: 'mano',
        userId: 1,
        time: 'Jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: 2
        }]
    }, {
        _id: '3',
        upVote: 1,
        downVote: 2,
        noOfAnswers: 2,
        QuestionTitle: 'What is function?',
        QuestionBody: 'It meant to be',
        questionTags: ['java', 'nodejs', 'mongodb', 'reactjs'],
        userPosted: 'mano',
        userId: 1,
        time: 'Jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: 2
        }]
    }]
    return (
        <div className="question-details-page">
            {
                questionsList === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionsList.filter(question => question._id === id).map(question =>
                            (
                                <div key={question._id}>
                                    <section className="question-details-container">
                                        <h1>{question.QuestionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upvote} alt="" width="18" />
                                                <p>{question.upVote - question.downVote}</p>
                                                <img src={downvote} alt="" width="18"/>
                                            </div>
                                            <div style={{width:"100%"}}>
                                                <div className="question-body">
                                                    {question.QuestionBody}
                                                </div>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag)=>(
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-action-user">
                                                    <button type='button'>Share</button>
                                                    <button type='button'>Delete</button>
                                                </div>
                                                <div>
                                                    <p>asked {question.time}</p>
                                                    <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#008d68'}}>
                                                        <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !==0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswer key={question._id} question={question}></DisplayAnswer>
                                            </section>
                                        )
                                    }
                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        <form >
                                            <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                            <input type="submit" className='post-ans-btn' value="Post you Answer" /> 
                                        </form>
                                        <p>
                                            Browse other questions
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                                ))
                                            } or 
                                            <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff'}}> ask your own question</Link>
                                        </p>
                                    </section>
                                </div>
                            )
                            )
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails