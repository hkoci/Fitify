import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { getToken, onMessageListener } from './firebase';
import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  getToken();

  const [show, setShow] = useState(false);

  onMessageListener().then(message => {
    setShow(true);
  }).catch(err => console.log('failed: ', err));

  return (
    <div className="App">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notification</strong>
            <small>12 mins ago</small>
          </Toast.Header>
          <Toast.Body>There are some new updates that you might love!</Toast.Body>
        </Toast>
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>


    </div>
  );
}

export default App;

const [isTokenFound, setTokenFound] = useState(false);
getToken(setTokenFound);

// inside the jsx being returned:
{isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
{!isTokenFound && <h1> Need notification permission ❗️ </h1>}