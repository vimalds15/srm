import React from 'react'
import logo from '../images/logo.png'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar sticky='top' bg="light" expand="lg">
        <Navbar.Brand href="#cars"><img className='logo' src={logo} alt="SRM" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mt-10">
        <div className='rightHead'>
          <Nav className="mr-auto ">
            <Nav.Link href="https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings"><i className="fas fa-server"></i> About Us</Nav.Link>
          <Nav.Link href="https://www.srmist.edu.in/Announcements"><i className="fas fa-volume-up"></i> Announcements</Nav.Link>
            <NavDropdown title="Quick Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#admissions"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Admissions</NavDropdown.Item>
            <NavDropdown.Item href="#eventl"><i className="far fa-calendar-alt"></i> Events</NavDropdown.Item>
              <NavDropdown.Item href="#deptl"><i className="fas fa-chalkboard-teacher"></i> Academics</NavDropdown.Item>
              <NavDropdown.Item href="#resc"><i className="fas fa-cogs"></i> Research</NavDropdown.Item>
            <NavDropdown.Item href="#camlife"><i className="fas fa-university"></i> Campus Life</NavDropdown.Item>
                <NavDropdown.Item  href="https://www.srmist.edu.in/content/admission-india-portal"><i class="fas fa-user-graduate"></i> Admission enquiry</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
    </Navbar>

    )
}

export default Header

































