//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Create Landing class using Component instace
class Weight extends React.Component {
  render() {
    return (
    
    //TODO Logic for searchField prop in Navbar.jsx
    <Navbar title='Weight Tracking' searchField='true' />

    );
  }
}

//Export class
export default Weight;