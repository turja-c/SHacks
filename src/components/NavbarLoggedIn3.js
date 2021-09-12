import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavbarLoggedIn3() {
    return (
      <div >
          {/* <Navbar style={{backgroundColor: 'red'}}></Navbar> */}
        <Navbar expand="lg" style={{marginTop: '2rem', backgroundColor: 'red', height: '0rem'}}>
            {/* <Navbar.Brand href="./images/scotiabank.svg" style={{marginRight: '40rem'}}>
                <img src="images/scotiabank.svg" style={{width: '200px'}}/></Navbar.Brand> */}
                <Container>
                <Navbar.Brand style={{fontSize: '1.2rem', color: '#fff'}}>Help Centre</Navbar.Brand>
                <Navbar.Brand style={{fontSize: '1.2rem', color: '#fff'}}>Contact</Navbar.Brand>
                <Navbar.Brand style={{fontSize: '1.2rem', color: '#fff'}}>Communications Centre</Navbar.Brand>
                <Navbar.Brand style={{fontSize: '1.2rem', color: '#fff'}}>Manage My Accounts</Navbar.Brand>
                <Navbar.Brand style={{fontSize: '1.2rem', color: '#fff'}}>Sign Out</Navbar.Brand>
                </Container>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              
        </Navbar>
        {/* <hr style={{marginTop: '1rem'}}></hr> */}
        </div>
        //</> 
    )
}


export default NavbarLoggedIn3;