import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'

import logo from '../../assests/logo.png'
import Search from '../../assests/magnifying-glass-solid.svg'

const Navbar = () => {

    const User=null;
  return (
    <nav>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="logo"  />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Team</Link>
            <form >
                <>
                    <input type="text" placeholder='Search...' />
                    <img src={Search} alt="search" className='search-icon' width='18' />
                </>
            </form>
            {User==null ?
                <Link to='/Auth' className='nav-item nav-link'>Log In</Link>:
                <>
                    <Link to='/'><Avatar></Avatar></Link>
                    <Button>LogOut</Button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar