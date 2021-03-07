//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Theme provider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Theming defaults and Session setters
import { defaultPrimary, defaultSecondary, defaultDarkMode} from '../constants/constant'
import ThemeSettings from '../services/settings/ThemeSettings'

//Import Weight view
import SleepView from '../components/sleep/SleepView'

//Create Landing class using Component instace
class Sleep extends React.Component {
  
  //Appearance settings
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

  getDarkMode = () => {
    if(sessionStorage.getItem("darkMode") === null || sessionStorage.getItem("darkMode") === undefined ){
      return defaultDarkMode;
    }else{
      if(sessionStorage.getItem("darkMode") === 'true'){
        return 'dark'
      }else{
        return 'light'
      }
    }
  }
  
  render() {

    ThemeSettings.storeAppearance()
    return (
    
    //TODO Logic for searchField prop in Navbar.jsx
    <React.Fragment>
      <MuiThemeProvider theme={createMuiTheme({
        palette: {
          type: this.getDarkMode(),
          primary: {
            main: this.getPrimaryColour()
          },
          secondary: {
            main: this.getSecondaryColour()
          }
        }
      })}>
      <Navbar title='Sleep' searchField='true' />
      <SleepView />
      </MuiThemeProvider>
    </React.Fragment>

    );
  }
}

//Export class
export default Sleep;