//Import React libraries including ReactRouter
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

//Stylesheets
import './components/main.css';

//App Componenets
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Activities from './pages/Activities';
import Weight from './pages/Weight';
import Sleep from './pages/Sleep';
import Settings from './pages/Settings';

// Static Components
import LandingPage from './static/Landing page/landingPage'
import HomePage from './static/Home page/home'
import ReviewPage from './static/Review page/review'
import HelpPage from './static/Help page/help'

//Import Authentication class to determine if user is authenticated
import Authentication from './services/login/authentication';

//Setup React Router routes
const routs = (
   <Router>
      <div>
         <Route exact path="/" component={LandingPage} />
         <Route path="/home" component={HomePage} />
         <Route path="/help" component={HelpPage} />
         <Route path="/review" component={ReviewPage} />
         <RedirectRoute path="/app/login" component={Login} />
         <RedirectRoute path="/app/register" component={Register} />
         <AuthenticatedRoute path="/app/dashboard" component={Dashboard} />
         <AuthenticatedRoute path="/app/activities" component={Activities} />
         <AuthenticatedRoute path="/app/weight" component={Weight} />
         <AuthenticatedRoute path="/app/sleep" component={Sleep} />
         <AuthenticatedRoute path="/app/settings" component={Settings} />
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