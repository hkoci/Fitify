//Import React libraries including ReactRouter
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

//Stylesheets
import './index.css';

//Home Components
import Landing from './components/home/Landing';
import About from './components/home/About';
import Help from './components/home/Help';

//Fitify Components
import Login from './components/fitify-app/Login';
import Dashboard from './components/fitify-app/Dashboard';

//Import Authentication required router
import AuthenticationRouter from './services/login/authentication-router';

//Setup React Router routes
const routs = (
   <Router>
      <div>
         <Route exact path="/" component={Landing} />
         <Route path="/about" component={About} />
         <Route path="/help" component={Help} />
         <Route path="/app/login" component={Login} />
         <AuthenticationRouter path="/app/dashboard" component={Dashboard} />
      </div>
   </Router>
);

//Render the Routes in the document root
ReactDOM.render(routs, document.getElementById('root'));