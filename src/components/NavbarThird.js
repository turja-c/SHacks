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

function NavbarThird() {
    return (
        <div>
        <Navbar expand="lg" style={{marginTop: '-2rem', marginBottom: '-0.9rem', color: '#FAFBFD'}}>
            <Container>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Advice +</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Bank Accounts</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Credit Cards</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Mortgages</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Loans and Lines of Crerdit</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Investments</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Insurance</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Programs</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1.5rem', color: '#808080', paddingRight: '3rem'}}>Rates and Fees</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Container>
              
        </Navbar>
        <hr style={{marginTop: '1rem'}}></hr>
        </div>

        //</> 
    )
}


export default NavbarThird;