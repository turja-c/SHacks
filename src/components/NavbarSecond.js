import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { BsSearch } from 'react-icons/BsSearch';

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
              <Form style={{marginTop: '-1rem'}}>
              <FormControl
                type="search"
                placeholder="Begin Your Search"
                className="mr-2"
                style={{width: '20rem', color: '#E6EBF0', height: '4.5rem'}}
                aria-label="Search"
              />
              <BsSearch />
            </Form>
            
              </Container>
        </Navbar>
        <hr style={{marginTop: '1rem'}}></hr>
        </div>

        //</> 
    )
}


export default NavbarSecond;