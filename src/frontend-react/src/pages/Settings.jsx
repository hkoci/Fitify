//Import React library
import React from 'react';

import Navbar from '../components/Navbar';
import SettingsView from '../components/SettingsView';

import Box from '@material-ui/core/Box';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Testing Theme code (TODO)
const primaryColour = sessionStorage.getItem("PrimaryColour");
const secondaryColour = sessionStorage.getItem("SecondaryColour");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E33E7F'
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

//Create Landing class using Component instace
class Settings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Navbar title='Settings' searchField='true' />
          <Box m={2} />
          <SettingsView />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

//Export class
export default Settings;