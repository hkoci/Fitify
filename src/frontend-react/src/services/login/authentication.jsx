//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
const SpringHostURL = 'http://localhost:8080'

//Authentication service class
//Rebased off (TODO: Ref in report) https://github.com/in28minutes/spring-boot-react-fullstack-examples/blob/master/spring-boot-react-basic-auth-login-logout/frontend-spring-boot-react-basic-auth-login-logout/src/service/AuthenticationService.js
//My implementation works differently by getting JWT access tokens from the Spring endpoint - if no token is return, the credentials are incorrect.
class Authentication {

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
                //"Access-Control-Allow-Origin": "*"
            }
        }).then((response) => {
            //The post method was successful and the AccessToken is recieved
            console.log(response.data.accessToken)

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

            if(error.response.status === 401){
                console.log("Error 401 - Incorrect user credentials")
                //Incorrect username/password
                //Redirect to login component and warn user that combination is incorrect
            }else if(error.response.status===400){
                console.log("Error 400 - Incorrect React fronend arguments")
                //Axios returned incorrect arguments
                //Check our code in the data arguments to make sure username and password is named correctly.
                //Mainly react server error
            }
        })
    }   


}

export default new Authentication()