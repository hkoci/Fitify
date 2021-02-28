//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import FirstTimeSetup from '../components/FirstTimeSetup';
import DashboardView from '../components/dashboard/DashboardView';

//Theme provider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Theming defaults and Session setters
import { defaultPrimary, defaultSecondary} from '../constants/constant'
import ThemeSettings from '../services/settings/ThemeSettings'

//Create Landing class using Component instace
class Dashboard extends React.Component {

  getPrimaryColour = () => {
    if(sessionStorage.getItem("primaryHexColour") === null || sessionStorage.getItem("primaryHexColour") === undefined ){
      return defaultPrimary;
    }else{
      return sessionStorage.getItem("primaryHexColour");
    }
  }

  getSecondaryColour = () => {
    if(sessionStorage.getItem("secondaryHexColour") === null || sessionStorage.getItem("secondaryHexColour") === undefined ){
      return defaultSecondary;
    }else{
      return sessionStorage.getItem("secondaryHexColour");
    }
  }
  
  render() {

    ThemeSettings.storeAppearance()

    return (
      
      <React.Fragment>
          <MuiThemeProvider theme={createMuiTheme({
            palette: {
              primary: {
                main: this.getPrimaryColour()
              },
              secondary: {
                main: this.getSecondaryColour()
              }
            }
          })}>
          <Navbar title='Dashboard' searchField='true' />
          <FirstTimeSetup/>
          <DashboardView/>
          </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

//Export class
export default Dashboard;