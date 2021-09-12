import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavbarSecond() {
    return (
      <div style={{marginTop: '3rem',marginBottom: '-0.9rem', color: '#FAFBFD'}}>
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="./images/scotiabank.svg" style={{marginRight: '2rem'}}>
                <img src="images/scotiabank.svg"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div style={{marginTop: '-1rem'}}>
              <FormControl
                type="search"
                placeholder="Begin Your Search"
                className="mr-2"
                style={{width: '25rem', color: '#E2E8ED', height: '4.5rem', borderRadius: '1rem'}}
                aria-label="Search"
              />
            <FontAwesomeIcon icon={["fas", "fa-search"]} />   
                     </div>
            {/* <Row style={{marginLeft: '5rem', marginTop: '-1rem'}}>
            <Navbar style={{fontSize: '1.5rem', color: '#000'}}>Locations  Contact Us    </Navbar> */}
            {/* <Navbar style={{fontSize: '1.5rem', color: '#000'}}>Contact Us </Navbar>
            <Navbar style={{fontSize: '1.5rem', color: '#000'}}>Bank Your Way</Navbar> */}
            {/* </Row>
            <Button style={{marginLeft: '15rem', marginTop: '-10rem'}}/> */}
            <Button style={{marginTop:'-6.5rem', marginRight: '-70rem', width: '20rem',  height: '4.5rem', backgroundColor: '#ED111A', borderColor: '#ED111A', borderRadius: '1rem'}}>
              Sign In
            </Button>
              </Container>
        </Navbar>
        <hr style={{marginTop: '1rem'}}></hr>
        </div>

        //</> 
    )
}


export default NavbarSecond;