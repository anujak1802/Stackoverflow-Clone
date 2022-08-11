import React from 'react'
import { useParams } from 'react-router-dom'
import upvote from '../../assests/caret-up-solid.svg'
import downvote from '../../assests/caret-down-solid.svg'
import './Questions.css'

const QuestionDetails = () => {
    const { id } = useParams()
    console.log(id)
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
                                        <h1>{question.questionTitle}</h1>
                                        console.log()
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upvote} alt="" width="18" />
                                                <p>{question.upVote - question.downVote}</p>
                                                <img src={downvote} alt="" width="18"/>
                                            </div>
                                        </div>
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