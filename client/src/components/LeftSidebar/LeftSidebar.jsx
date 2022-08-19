import React from 'react'
import Globe from '../../assests/globe.png'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <nav className="left-sidebar">
      <div className="side-nav">
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div><p>Public</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeClassName='active'>
            <img src={Globe} alt="Globe" width='18px' />
            <p style={{ paddingLeft: '10px' }}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClassName='active'>
            <p style={{ paddingLeft: '10px' }}>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeClassName='active'>
            <p style={{ paddingLeft: '10px' }}>Users</p>
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default LeftSidebar