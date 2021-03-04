import React from 'react'
import logo from '../images/logo.png'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar sticky='top' bg="light" expand="lg">
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt="SRM" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mt-10">
        <div className='rightHead'>
          <Nav className="mr-auto ">
            <Nav.Link href="#home"><i className="fas fa-server"></i> About Us</Nav.Link>
          <Nav.Link href="#link"><i className="fas fa-volume-up"></i> Announcements</Nav.Link>
          <Nav.Link href="#link"><i className="fas fa-headphones"></i> Support</Nav.Link>
            <NavDropdown title="Quick Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i className="fas fa-graduation-cap"></i> Admissions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i className="fas fa-building"></i> Departments</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><i className="far fa-calendar-alt"></i> Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><i className="fas fa-chalkboard-teacher"></i> Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i className="fas fa-cogs"></i> Career</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><i className="fas fa-university"></i> Campus Life</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><i className="fas fa-medal"></i> Achievements</NavDropdown.Item>
              <NavDropdown.Divider />
              <div className='lgn'>
                <NavDropdown.Item  href="#action/3.4">Login/Sign Up</NavDropdown.Item>
                </div>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Header

































