import React from 'react'

const QuestionDetails = () => {
    var questionsList = [{
        _id: 1,
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
        _id: 2,
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
        _id: 3,
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
            
        </div>
    )
}

export default QuestionDetails