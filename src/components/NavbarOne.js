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

function NavbarOne() {
    return (
      <div>
        <Navbar expand="lg" style={{marginTop: '-0.5rem', marginBottom: '-0.9rem', color: '#FAFBFD'}}>
            <Container>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#000'}}>Personal</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>Small Business</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>Commercial</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>Global Markets</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>Global Wealth</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>About Us</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080'}}>Investors</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Container>
              
        </Navbar>
        <hr style={{marginTop: '1rem'}}></hr>
        </div>
        //</> 
    )
}


export default NavbarOne;