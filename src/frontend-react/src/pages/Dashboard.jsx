//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

//Create Landing class using Component instace
class Dashboard extends React.Component {
  render() {
    return (
    
    //TODO Logic for searchField prop in Navbar.jsx
    <Navbar title='Dashboard' searchField='true' />

    );
  }
}

//Export class
export default Dashboard;