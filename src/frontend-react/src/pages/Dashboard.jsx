//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import FirstTimeSetup from '../components/FirstTimeSetup';

import Container from '@material-ui/core/Container';

//Create Landing class using Component instace
class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title='Dashboard' searchField='true' />
        <FirstTimeSetup/>    
      </React.Fragment>    
    );
  }
}

//Export class
export default Dashboard;