import React from 'react'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import {Link, useLocation, useNavigate} from 'react-router-dom'


const HomeMainbar = () => {

  const user =1;
  const navigate= useNavigate();
  const checkAuth=()=>{
    if(user===null){
      alert("Login or signin")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  var questionsList=[{
    id:1,
    votes:3,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  },{
    id:2,
    votes:0,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  },{
    id:3,
    votes:1,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  }]

  const location= useLocation();
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname ==='/'? <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionsList ==null ?
          <h1>Loading</h1>:
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar