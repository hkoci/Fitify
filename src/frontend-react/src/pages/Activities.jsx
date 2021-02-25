//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import FirstTimeSetup from '../components/FirstTimeSetup';

//Create Activities class using Component instace
class Activities extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar title='Activities' searchField='true' />
        <FirstTimeSetup/>
      </React.Fragment>
    );
  }
}

//Export class
export default Activities;