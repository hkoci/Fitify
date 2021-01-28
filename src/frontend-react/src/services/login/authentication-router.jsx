//Import React libraries including React Router for routing
import {React, Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

//Import Authentication class to determine if user is authenticated
import Authentication from './authentication';

//Create authentication class
class AuthenticationRouter extends Component {
    render(){
        //Check if user is authenticated
        if (Authentication.getAuthenticationStatus()) {
            //Return the given route 
            return <Route {...this.props} />
        } else {
            //Redirect to the login component
            return <Redirect to="/app/login" />
        }
    }
}

export default AuthenticationRouter