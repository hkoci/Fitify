var firebaseConfig = {
    apiKey: "AIzaSyCYItPpo7F_adWpYMSfJ7tr23c5llxg87E",
    authDomain: "fitfy-notifications.firebaseapp.com",
    projectId: "fitfy-notifications",
    storageBucket: "fitfy-notifications.appspot.com",
    messagingSenderId: "773402074984",
    appId: "1:773402074984:web:9ede8c47535e07b51c80dd",
    measurementId: "G-8QNGH33F53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


import 'firebase/messaging';
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'GENERATED_MESSAGING_KEY'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }