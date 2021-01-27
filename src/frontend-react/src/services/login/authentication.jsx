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
        }).then((response) => {
            //The post method was successful and the AccessToken is recieved
            console.log(response.data[0])

            //TODO: Something with the AccessToken to be stored and used permanently for later communication to endpoints
        })
        .catch((error) => {
            //The post method was not successful and some error has occured

            /*
            This could be Unauthorised (401) - incorrect user/password
            This might be MethodArgumentNotValidException (400) - wrong arguments sent
            Or something else (e.g. Spring server is down.)
            */

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)

            if(error.response.status==401){
                //Incorrect username/password
                //Redirect to login component and warn user that combination is incorrect
            }else(error.response.status==400){
                //Axios returned incorrect arguments
                //Check our code in the data arguments to make sure username and password is named correctly.
                //Mainly react server error
            }
        })
    }   


}

export default new AuthenticationService()