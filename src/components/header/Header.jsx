import React from 'react'
import { useEffect } from 'react'
import "./header.css"
import { Container,Navbar, Nav } from 'react-bootstrap'
import Aos from "aos"
import "aos/dist/aos.css"
const Header = () => {
  useEffect(()=>{
    Aos.init({
        duration: 1500
    });
},[])
  return (
    <Navbar expand="lg" className='sticky'>
      <Container>
        <Navbar.Brand href="#home">Jisan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link  href="#link">About</Nav.Link>
            <Nav.Link  href="#link">Skills</Nav.Link>
            <Nav.Link  href="#link">Services</Nav.Link>
            <Nav.Link  href="#link">Portfolio</Nav.Link>
            <Nav.Link  href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header