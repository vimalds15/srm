import React from 'react'
import { Navbar,NavDropdown,Nav,Form,FormControl,Button } from 'react-bootstrap'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><img className='logo' src={logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search  <i class="fa fa-search" aria-hidden="true"></i>
 </Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
</header>
    )
}

export default Header
