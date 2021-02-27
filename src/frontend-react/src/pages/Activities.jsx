//Import React library
import React from 'react';

import Navbar from '../components/Navbar';

import ActivitiesView from '../components/activities/ActivitiesView'

//Create Activities class using Component instace
class Activities extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar title='Activities' searchField='true' />
        <ActivitiesView />
      </React.Fragment>
    );
  }
}

//Export class
export default Activities;