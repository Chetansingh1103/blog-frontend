/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const NavigationBar = () => {

  const autState = useSelector(state => state.auth)
  const token = autState.token;

  const [ handleNavbar, setHandleNavbar ] = useState(null);

 
  useEffect(() => {
    if(window.innerWidth < 500){
      setHandleNavbar(true);
    }else{
      setHandleNavbar(false);
    }
  }, [handleNavbar])


  function logout(){
    localStorage.removeItem("token");
  }

    return (

        <div style={{position: "fixed", width: "100%", top: "0", zIndex: "10"}}>
        
        {handleNavbar ? (<Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Homepage</Nav.Link>
            <Nav.Link href="/my-blogs">My Blogs</Nav.Link>
            {token && (<Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>)}
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
      :
      (<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Homepage</Nav.Link>
            <Nav.Link href="/my-blogs">My Blogs</Nav.Link>
            {token && (<Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>)}
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)}
        </div>

    )

}

export default NavigationBar;

         {/* <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <a href='/blog'>Blog</a> */}