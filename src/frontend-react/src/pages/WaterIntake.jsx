//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Theme provider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Theming defaults and Session setters
import { defaultPrimary, defaultSecondary, defaultDarkMode} from '../constants/constant'
import ThemeSettings from '../services/settings/ThemeSettings'

//Import Weight view
import WaterIntakeView from '../components/water/WaterIntakeView'

//Create Landing class using Component instace
class WaterIntake extends React.Component {

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

      <Navbar title='Water Intake' searchField='true' />

      <WaterIntakeView />

      </MuiThemeProvider>
    </React.Fragment>

    );
  }
}

//Export class
export default WaterIntake; 