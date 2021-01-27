//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup global variable for Spring Host - this will be changed in production *Include port but no endpoints!*
const SpringHostURL = 'http://localhost:8080'

//Authentication service class
class AuthenticationService {

    //Method to get Authorisation Bearer token from JWT
    //Request it using username and password parameters
    getBearerToken(username, password){       
        //Post the username and password as json to the auth endpoint
        return axios.post(`${SpringHostURL}/authenticate`,{
            username: username,
            password: password
        },{
            headers: {
                //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
    }   


}

export default new AuthenticationService()