import React from 'react'
import Board from '../components/Board';
import Card from '../components/Card';
import BoardFinal from '../components/BoardFinal';
import CardFinal from '../components/CardFinal';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavbarLoggedIn2 from '../components/NavbarLoggedIn2';
import NavbarLoggedIn3 from '../components/NavbarLoggedIn3';
import NavbarOne from '../components/NavbarOne';
import NavbarSecond from '../components/NavbarSecond';
import NavbarThird from '../components/NavbarThird';
import { CardDeck, Row } from 'react-bootstrap';

function DesignChatbot() {
    return (
        <div>
            <NavbarLoggedIn2 />
            <NavbarLoggedIn3 />
                <h3 style={{marginRight: '75rem'}}>Create Commerical Banking Chatbot</h3>
                <h5 style={{marginRight: '63rem'}}>Please review guidelines and ensure the chatbot is up to date with new analytics.</h5>
                <Container>
                <CardDeck>
                    <Row>
                        <Col>
                    <div style={{boxShadow:'2px 2px 4px #000000', paddingBottom: '2rem', borderRadius: '2rem'}}>
                <Tabs
                defaultActiveKey="home"
                transition={false}
                // id="noanim-tab-example"
                className="mb-3"
                style={{color: 'green'}}
                >
                <Tab eventKey="home" title="Greetings" style={{fontSize: '9px'}}>
                <Board id="board-1" className="board">
                    <Card id="card-1" draggable="true">
                    <h1 style={{color: 'white'}}>option 1</h1>
                    </Card>
                </Board>
                <Board id="board-2" className="board">
                    <Card id="card-2" draggable="true">
                    <h1 style={{color: 'white'}}>option 2</h1>
                    </Card>
                </Board>
                <Board id="board-3" className="board">
                    <Card id="card-3" draggable="true">
                    <h1 style={{color: 'white'}}>option 3</h1>
                    </Card>
                </Board>
                <Board id="board-4" className="board">
                    <Card id="card-4" draggable="true">
                    <h1 style={{color: 'white'}}>option 4</h1>
                    </Card>
                </Board>
                </Tab>
                <Tab eventKey="profile" title="Acknowledgments">
                <Board id="board-5" className="board">
                    <Card id="card-5" draggable="true">
                    <h1 style={{color: 'white'}}>option 5</h1>
                    </Card>
                </Board>
                <Board id="board-6" className="board">
                    <Card id="card-6" draggable="true">
                    <h1 style={{color: 'white'}}>option 6</h1>
                    </Card>
                </Board>
                <Board id="board-7" className="board">
                    <Card id="card-7" draggable="true">
                    <h1 style={{color: 'white'}}>option 7</h1>
                    </Card>
                </Board>
                <Board id="board-8" className="board">
                    <Card id="card-8" draggable="true">
                    <h1 style={{color: 'white'}}>option 8</h1>
                    </Card>
                </Board>
                </Tab>
                <Tab eventKey="Prompts" title="Prompts" >
                <Board id="board-9" className="board">
                    <Card id="card-9" draggable="true">
                    <h1 style={{color: 'white'}}>option 9</h1>
                    </Card>
                </Board>
                <Board id="board-10" className="board">
                    <Card id="card-10" draggable="true">
                    <h1 style={{color: 'white'}}>option 10</h1>
                    </Card>
                </Board>
                <Board id="board-11" className="board">
                    <Card id="card-11" draggable="true">
                    <h1 style={{color: 'white'}}>option 11</h1>
                    </Card>
                </Board>
                <Board id="board-12" className="board">
                    <Card id="card-12" draggable="true">
                    <h1 style={{color: 'white'}}>option 12</h1>
                    </Card>
                </Board>
                </Tab>
                <Tab eventKey="answers" title="Answers" >
                <Board id="board-13" className="board">
                    <Card id="card-13" draggable="true">
                    <h1 style={{color: 'white'}}>option 9</h1>
                    </Card>
                </Board>
                <Board id="board-14" className="board">
                    <Card id="card-14" draggable="true">
                    <h1 style={{color: 'white'}}>option 10</h1>
                    </Card>
                </Board>
                <Board id="board-15" className="board">
                    <Card id="card-15" draggable="true">
                    <h1 style={{color: 'white'}}>option 11</h1>
                    </Card>
                </Board>
                <Board id="board-16" className="board">
                    <Card id="card-16" draggable="true">
                    <h1 style={{color: 'white'}}>option 12</h1>
                    </Card>
                </Board>
                </Tab>
                <Tab eventKey="followups" title="Follow Ups" >
                <Board id="board-17" className="board">
                    <Card id="card-17" draggable="true">
                    <h1 style={{color: 'white'}}>option 9</h1>
                    </Card>
                </Board>
                <Board id="board-18" className="board">
                    <Card id="card-18" draggable="true">
                    <h1 style={{color: 'white'}}>option 10</h1>
                    </Card>
                </Board>
                <Board id="board-19" className="board">
                    <Card id="card-19" draggable="true">
                    <h1 style={{color: 'white'}}>option 11</h1>
                    </Card>
                </Board>
                <Board id="board-20" className="board">
                    <Card id="card-20" draggable="true">
                    <h1 style={{color: 'white'}}>option 12</h1>
                    </Card>
                </Board>
                </Tab>
                </Tabs>
                </div>
                </Col>
                <Card>
                <Col>
                
                <h3 style={{marginRight: '80rem'}}>Drag and Drop options below</h3>
                <h5 style={{marginRight: '63rem'}}>Choose the options that fit the business model and create a customized chatbot.</h5>
                <main className="flexbox" style={{boxShadow:'2px 2px 4px #000000', padding: '2rem', borderRadius: '2rem'}}>

                <BoardFinal id="board-final" className="board" >
                    <CardFinal id="card-final" draggable="true">
                    
                    </CardFinal>
                </BoardFinal>
                </main>
                </Col>
                </Card>
                </Row>
                </CardDeck>
                </Container>
        </div>
    )
}

export default DesignChatbot
