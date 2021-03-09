//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import SocialView from '../components/social/SocialView'

//Theme provider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Theming defaults and Session setters
import { defaultPrimary, defaultSecondary, defaultDarkMode} from '../constants/constant'
import ThemeSettings from '../services/settings/ThemeSettings'

//Create Activities class using Component instace
class Activities extends React.Component {

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
        <Navbar title='Social' searchField='true' />
        <SocialView />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

//Export class
export default Activities;