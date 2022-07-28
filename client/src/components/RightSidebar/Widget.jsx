import React from 'react'
import './RightSidebar.css'
import pen from '../../assests/pen.png'
import comment from '../../assests/comment.png'
import logo from '../../assests/icon.png'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The TeachMe Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width='18' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width='18' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={logo} alt="logo" width='18' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
            </div>
            <h4>Hot Meta Post</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <p>38</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>20</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>14</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis </p>
                </div>
            </div>
        </div>
    )
}

export default Widget