import React from 'react'
import './Auth.css'
import leaf from '../../assests/green-tea.png'

const AboutAuth = () => {
  return (
    <div className="auth-container-1">
      <img src={leaf} alt="leaf" width='40px' className='leaf' />
      <h1>Join the TeachMeHow community</h1>
      <p>Want to share a solution - Here is the place</p>
      <p>Stuck with codes-Find your solution here</p>
      <p style={{ color: 'blue', fontSize: "13px" }}>Find your solution or solve a problem.</p>
    </div>
  )
}

export default AboutAuth