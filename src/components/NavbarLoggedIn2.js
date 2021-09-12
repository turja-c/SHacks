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

function NavbarLoggedIn2() {
    return (
      <div>
        <Navbar expand="lg" style={{marginTop: '-0.5rem', marginBottom: '-0.9rem', color: '#FAFBFD'}}>
            <Container>
            <Navbar.Brand href="./images/scotiabank.svg" style={{marginRight: '40rem'}}>
                <img src="images/scotiabank.svg" style={{width: '200px'}}/></Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.2rem', color: '#808080'}}>Help Centre</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.2rem', color: '#808080'}}>Contact</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.2rem', color: '#808080'}}>Communications Centre</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.2rem', color: '#808080'}}>Manage My Accounts</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.2rem', color: '#808080'}}>Sign Out</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Container>
              
        </Navbar>
        {/* <hr style={{marginTop: '1rem'}}></hr> */}
        </div>
        //</> 
    )
}


export default NavbarLoggedIn2;