//Import React libraries including ReactRouter
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

//Stylesheets
import './index.css';

//Home Components
import Landing from './components/home/Landing';
import About from './components/home/About';
import Help from './components/home/Help';
import ContactUs from './components/home/ContactUs';

//Fitify Components
import Login from './components/fitify-app/login/Login';
import Register from './components/fitify-app/registration/Register';
import Dashboard from './components/fitify-app/dashboard/Dashboard';

//Import Authentication class to determine if user is authenticated
import Authentication from './services/login/authentication';

//Setup React Router routes
const routs = (
   <Router>
      <div>
         <Route exact path="/" component={Landing} />
         <Route path="/about" component={About} />
         <Route path="/help" component={Help} />
         <Route path="/ContactUs" component={ContactUs} />
         <RedirectRoute path="/app/login" component={Login} />
         <RedirectRoute path="/app/register" component={Register} />
         <AuthenticatedRoute path="/app/dashboard" component={Dashboard} />
      </div>
   </Router>
);

//Authenticated Routing functionality
function AuthenticatedRoute({ component: Component, ...rest }) {
   return (
     <Route {...rest} render={props => Authentication.getAuthenticationStatus() ? (<Component {...props} />) 
         : (
           <Redirect to={{ pathname: "/app/login", state: { from: props.location } }} />
         )
       }
     />
   );
}

//Redirected Sign-on users to dashboard routing
function RedirectRoute({ component: Component, ...rest }) {
   return (
     <Route {...rest} render={props => !Authentication.getAuthenticationStatus() ? (<Component {...props} />) 
         : (
           <Redirect to={{ pathname: "/app/dashboard", state: { from: props.location } }} />
         )
       }
     />
   );
}

//Render the Routes in the document root
ReactDOM.render(routs, document.getElementById('root'));