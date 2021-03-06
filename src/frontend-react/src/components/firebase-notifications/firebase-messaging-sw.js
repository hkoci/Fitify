// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCYItPpo7F_adWpYMSfJ7tr23c5llxg87E",
    authDomain: "fitfy-notifications.firebaseapp.com",
    projectId: "fitfy-notifications",
    storageBucket: "fitfy-notifications.appspot.com",
    messagingSenderId: "773402074984",
    appId: "1:773402074984:web:9ede8c47535e07b51c80dd",
    measurementId: "G-8QNGH33F53"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});