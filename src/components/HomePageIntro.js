import React from 'react'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function HomePageIntro() {
    return (
        <div>
        <Card style={{backgroundColor: 'white', 
                    borderRadius: '2rem', 
                    marginTop: '-4rem', 
                    marginLeft: '12rem',
                    height: '20rem', 
                    boxShadow:'2px 2px 4px #000000',
                    position: 'absolute'
                    }} className="container">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
            dsfdsf
        </Tab>
        <Tab eventKey="profile" title="Profile">
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        </Tab>
      </Tabs>
        </Card>
        
      </div>
    )
}

export default HomePageIntro
