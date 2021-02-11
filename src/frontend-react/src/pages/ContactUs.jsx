//Import React library
import React from 'react';
import Container from '@material-ui/core/Container';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import '../components/main.css';


//Create Help class using Component instace
class ContactUs extends React.Component {
   render() {
      return (
        <Container maxWidth="lg">
          <div class='header'>
            <h1><ForumTwoToneIcon style={{fontSize: 50}} /> Contact Us </h1>
          </div>

          <div class='content'>
            
          </div>
        </Container>
      )
   }
}

//Export class
export default ContactUs;