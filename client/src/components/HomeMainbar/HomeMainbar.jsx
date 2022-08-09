import React from 'react'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { useLocation, useNavigate} from 'react-router-dom'


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
    _id:1,
    upVote:3,
    downVote:2,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    userId:1,
    time:'Jan 1',
    answer:[{
      answerBody:"Answer",
      userAnswered:"kumar",
      answeredOn:"jan 2",
      userId:2
    }]
  },{
    _id:2,
    upVote:0,
    downVote:2,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    userId:1,
    time:'Jan 1',
    answer:[{
      answerBody:"Answer",
      userAnswered:"kumar",
      answeredOn:"jan 2",
      userId:2
    }]
  },{
    _id:3,
    upVote:1,
    downVote:2,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    userId:1,
    time:'Jan 1',
    answer:[{
      answerBody:"Answer",
      userAnswered:"kumar",
      answeredOn:"jan 2",
      userId:2
    }]
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