//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Create Landing class using Component instace
class Settings extends React.Component {
  render() {
    return (
    
    //TODO Logic for searchField prop in Navbar.jsx
    <Navbar title='Settings' searchField='true' />

    );
  }
}

//Export class
export default Settings;