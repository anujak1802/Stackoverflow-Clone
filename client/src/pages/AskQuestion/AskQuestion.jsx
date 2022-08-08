import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
  return (
    <div className="ask-question">
        <div className="ask-ques-container">
            <h1>Ask Question</h1>
            <form >
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you are asking question to other person</p>
                        <input type="text" id='ask-ques-title' placeholder='eg. Is there a R function for finding the index of the element in vector' />
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        <input type="text" id='ask-ques-tags' placeholder='eg. (xml typescript wordpress)' />
                    </label>
                </div>
                <input type="submit" value='Review your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion