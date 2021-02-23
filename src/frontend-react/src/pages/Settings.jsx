//Import React library
import React from 'react';

import Navbar from '../components/Navbar';
import SettingsView from '../components/SettingsView';

import Box from '@material-ui/core/Box';

//Create Landing class using Component instace
class Settings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title='Settings' searchField='true' />
        <Box m={2} />
        <SettingsView />
      </React.Fragment>
    );
  }
}

//Export class
export default Settings;