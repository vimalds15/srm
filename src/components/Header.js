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
        <li><a href="#"><i class="fas fa-graduation-cap"></i> Admissions</a></li>
        <li><a href="#"><i class="fas fa-building"></i> Departments</a></li>
        <li><a href="#"><i class="fas fa-volume-up"></i> Announcements</a></li>
        <li><a href="#"><i class="far fa-calendar-alt"></i> Events</a></li>
        <li><a href="#"><i class="fas fa-chalkboard-teacher"></i> Faculty</a></li>
        <li><a href="#"><i class="fas fa-cogs"></i> Career</a></li>
        <li><a href="#"><i class="fas fa-university"></i> Campus Life</a></li>
        <li><a href="#"><i class="fas fa-medal"></i> Achievements</a></li>
        
        </div>
        </div>
    )
}

export default Header

































