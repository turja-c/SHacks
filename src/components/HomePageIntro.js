import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function HomePageIntro(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="HomePageIntro"
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

HomePageIntro.propTypes = {
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
    <Card style={{backgroundColor: 'white', 
    borderRadius: '2rem', 
    marginTop: '-4rem', 
    marginLeft: '12rem',
    height: '20rem', 
    boxShadow:'2px 2px 4px #000000',
    position: 'absolute'
    }} className="container">
    <div className=''>
      <AppBar position="">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label=""
          style={{backgroundColor: 'red', width: '117rem', marginLeft: '-1.5rem', boxShadow:'2px 2px 4px #000000'}}
          className="container"
        >
          <LinkTab label="About" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Team Loyal" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Mentor" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <HomePageIntro value={value} index={0}>
        <h4 style={{marginRight: '75rem'}} className="container">SCOTT: Scotiabank Accessibility Assistant</h4>
        <h5 style={{marginRight: '90rem'}} className="container">Click here to learn more.</h5>
        <h5 style={{marginRight: '0rem',}}>SCOTT enables you to interact with the best services that Scotiabank has to offer without
        any hassles that may come your way. Using our proprietary technology, we customize your experience to allow you to do 
        what you need to do.</h5> 
      </HomePageIntro>
      <HomePageIntro value={value} index={1}>
        <h4 style={{marginRight: '75rem'}} className="container">Turja Chowdhury | Andrea Carla Abellera  | Isham Behl</h4>
        <h5 style={{marginRight: '90rem'}} className="container">Click here to learn more.</h5>
        <h5 style={{marginRight: '90rem'}} className="container">The team is made up of all computer science students across Canada.</h5>
      </HomePageIntro>
      <HomePageIntro value={value} index={2}>
        <h4 style={{marginRight: '75rem'}} className="container">Victora Li</h4>
        <h5 style={{marginRight: '90rem'}} className="container">Thank you to our wonderful mentor!!</h5>
      </HomePageIntro>
    </div>
    </Card>
  );
}