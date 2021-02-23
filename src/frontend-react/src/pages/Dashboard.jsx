//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import FirstTimeSetup from '../components/FirstTimeSetup';

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