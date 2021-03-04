import React from 'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Header = () => {
  return (
       <Navbar bg="light"  expand="lg">
      <Navbar.Brand  href="#home"><img className='logo' src={logo} ></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <NavDropdown  title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Admissions</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Placements</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Announcements</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Students</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Faculty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Career</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Login/Sign Up</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
      </Navbar>
    )
}

export default Header

const Container = styled.div`
  display:flex;
  height:10vh;
  border-bottom:1px solid #e8e8e3;
  align-items:center;
  justify-content:space-between;
`

const Leftcont = styled.div`
  height:70px;
  width:70px;
  margin:5px 5% ;
  img{
    height:100%;
    width:100%;
  }
`
const LogoCont = styled.div`

`

const Rightcont = styled.div`
  display:flex;
  margin-right:3%;
`

const Item = styled.div`
  font-size:15px;
  margin-left:20px;
  cursor:pointer;

  :hover{
    color:black;
  }
`

{/* <Container>
        <Leftcont>
          <LogoCont>
            <img src={logo} />
          </LogoCont>
        </Leftcont>
        <Rightcont>
          <Item>About Us</Item>
          <Item>Admissions</Item>
          <Item>Placements</Item>
          <Item>Announcements</Item>
          <Item>Events</Item>
          <Item>Alumni</Item>
          <Item>Career</Item>
          <Item>Contact Us</Item>
        </Rightcont>
      </Container> */}
































