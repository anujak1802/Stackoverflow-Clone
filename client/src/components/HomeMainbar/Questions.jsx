import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className="display-votes-container">
            <p>{question.votes}</p>
            <p>votes</p>
        </div>
        <div className="display-votes-container">
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className="display-questions-details">
          <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.QuestionTitle}</Link>
          <div className="display-tags-time">
            {
              question.questionTags.map((tag)=>(
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Questions