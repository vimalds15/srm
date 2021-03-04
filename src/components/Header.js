import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Header = () => {
  return (
    <div className="total">
      <div className='left_cont'>
        <img className='logo' src={logo}
        />
      </div>

      <div className='right_cont'>
    
        <li><a className='active' href="#"><i class="fas fa-server"></i> About</a></li>
        <li><a href="#">Admissions</a></li>
        <li><a href="#">Departments</a></li>
        <li><a href="#">Announcements</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Faculty</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Campus Life</a></li>
        <li><a href="#">Achievements</a></li>
        
        </div>
        </div>
    )
}

export default Header

































