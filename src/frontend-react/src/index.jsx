//Import React libraries including ReactRouter
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

//Stylesheets
import './index.css';

//Components (react-router)
import Landing from './components/home/Landing';
import About from './components/home/About';
import Help from './components/home/Help';

//Setup React Router routes
const routs = (
   <Router>
      <div>
         <Route exact path="/" component={Landing} />
         <Route path="/about" component={About} />
         <Route path="/help" component={Help} />
      </div>
   </Router>
);

//Render the Routes in the document root
ReactDOM.render(routs, document.getElementById('root'));