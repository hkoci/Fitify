//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Theme provider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Theming defaults and Session setters
import { defaultPrimary, defaultSecondary} from '../constants/constant'
import ThemeSettings from '../services/settings/ThemeSettings'

//Create Landing class using Component instace
class Weight extends React.Component {
  
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
    
    //TODO Logic for searchField prop in Navbar.jsx
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
      <Navbar title='Activities' searchField='true' />
      </MuiThemeProvider>
    </React.Fragment>

    );
  }
}

//Export class
export default Weight;