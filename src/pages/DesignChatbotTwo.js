import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';

import Board from '../components/Board';
import Card from '../components/Card';
import BoardFinal from '../components/BoardFinal';
import CardFinal from '../components/CardFinal';
import Container from 'react-bootstrap/Container';
import NavbarLoggedIn2 from '../components/NavbarLoggedIn2';
import NavbarLoggedIn3 from '../components/NavbarLoggedIn3';

function DesignChatbotTwo(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="DesignChatbotTwo"
      hidden={value !== index}
    //   id={`nav-tabpanel-${index}`}
    //   aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

DesignChatbotTwo.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    // id: `nav-tab-${index}`,
    // 'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     // backgroundColor: '3fff',
//   },
// }));

export default function NavTabs() {
//   const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <NavbarLoggedIn2 />
    <NavbarLoggedIn3 />
    <h3 style={{marginRight: '75rem'}}>Create Commerical Banking Chatbot</h3>
                <h5 style={{marginRight: '63rem'}}>Please review guidelines and ensure the chatbot is up to date with new analytics.</h5>
    <Container>
    <div style={{boxShadow:'2px 2px 4px #000000', paddingBottom: '2rem', borderRadius: '2rem'}}>
    <div className=''>
      <AppBar position="">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label=""
          style={{backgroundColor: 'red', width: '114.5rem', marginLeft: '-0.4rem', boxShadow:'2px 2px 4px #000000'}}
          className="container"
        >
          <LinkTab label="About" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Team Loyal" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Mentor" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <DesignChatbotTwo value={value} index={0}>
        <Board id="board-1" className="board">
                    <Card id="card-1" draggable="true">
                    <h4 style={{color: 'white'}}>option 1</h4>
                    </Card>
                </Board>
                <Board id="board-2" className="board">
                    <Card id="card-2" draggable="true">
                    <h4 style={{color: 'white'}}>option 2</h4>
                    </Card>
                </Board>
                <Board id="board-3" className="board">
                    <Card id="card-3" draggable="true">
                    <h4 style={{color: 'white'}}>option 3</h4>
                    </Card>
                </Board>
                <Board id="board-4" className="board">
                    <Card id="card-4" draggable="true">
                    <h4 style={{color: 'white'}}>option 4</h4>
                    </Card>
                </Board>
      </DesignChatbotTwo>
      <DesignChatbotTwo value={value} index={1}>
      <Board id="board-5" className="board">
                    <Card id="card-5" draggable="true">
                    <h4 style={{color: 'white'}}>option 5</h4>
                    </Card>
                </Board>
                <Board id="board-6" className="board">
                    <Card id="card-6" draggable="true">
                    <h4 style={{color: 'white'}}>option 6</h4>
                    </Card>
                </Board>
                <Board id="board-7" className="board">
                    <Card id="card-7" draggable="true">
                    <h4 style={{color: 'white'}}>option 7</h4>
                    </Card>
                </Board>
                <Board id="board-8" className="board">
                    <Card id="card-8" draggable="true">
                    <h4 style={{color: 'white'}}>option 8</h4>
                    </Card>
                </Board>
      </DesignChatbotTwo>
      <DesignChatbotTwo value={value} index={2}>
      <Board id="board-9" className="board">
                    <Card id="card-9" draggable="true">
                    <h4 style={{color: 'white'}}>option 9</h4>
                    </Card>
                </Board>
                <Board id="board-10" className="board">
                    <Card id="card-10" draggable="true">
                    <h4 style={{color: 'white'}}>option 10</h4>
                    </Card>
                </Board>
                <Board id="board-11" className="board">
                    <Card id="card-11" draggable="true">
                    <h4 style={{color: 'white'}}>option 11</h4>
                    </Card>
                </Board>
                <Board id="board-12" className="board">
                    <Card id="card-12" draggable="true">
                    <h4 style={{color: 'white'}}>option 12</h4>
                    </Card>
                </Board>
      </DesignChatbotTwo>
    </div>
    </div>
    <h3 style={{marginRight: '80rem', paddingTop: '2rem'}}>Drag and Drop options below</h3>
                <h5 style={{marginRight: '60rem'}}>Choose the options that fit the business model and create a customized chatbot.</h5>
                <main className="flexbox" style={{boxShadow:'2px 2px 4px #000000', padding: '2rem', borderRadius: '2rem'}}>

                <BoardFinal id="board-final" className="board" >
                    <CardFinal id="card-final" draggable="true">
                    <h4 style={{color: 'white'}}>Hi, I am Scott the Accessibility Assistant, how will I help you today?</h4>
                    </CardFinal>
                    <CardFinal id="card-final" draggable="true">
                    <h4 style={{color: 'white'}}>Would you wish to make the website text larger? </h4>
                    </CardFinal>
                </BoardFinal>
                
                </main>
                </Container>
    </>
  );
}