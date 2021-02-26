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
            //Debug (Log AccessToken to console for debug)
            //console.log(response.data.accessToken)

            //Store username in localStorage
            sessionStorage.setItem("CurrentUsername", username)

            //Store User Details in session
            this.getUserDetails()

            //Change Axios configuration to use accesstoken as Authorisation Bearer
            this.axiosRequestTokenHeader("Bearer " + response.data.accessToken)
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
                throw error
                //Incorrect username/password
            }else if(error.response.status === 400){
                console.error("Error 400 - Incorrect React fronend arguments")
                throw error
                //Axios returned incorrect arguments
                //Check our code in the data arguments to make sure username and password is named correctly.
                //Mainly react server error
            }else{
                console.error("Error: " + error.response.status + " - " + error.response)
                //Some other error to report back
                throw error
            }
        })
    }

    //Method to test if user is authenticated
    getAuthenticationStatus(){
        return sessionStorage.getItem("CurrentUsername") !== null
    }
    
    //Method to setup accesstoken in header whilst using Axios
    axiosRequestTokenHeader(token) {
        //Intercept Axios request
        axios.interceptors.request.use((config) => {
            //If a username has been saved in the local storage (only after successful auth)
            if (Authentication.getAuthenticationStatus()) {
                //Set authorization header to accessToken
                config.headers.authorization = token
            }
                return config
            }
        )
    }

    //Method for logging out & emptying sessionStorage
    logout() {
        sessionStorage.removeItem("CurrentUsername");
    }

    //Method to get Authorisation Bearer token from JWT
    //Request it using username and password parameters
    getUserDetails(){
        //console.log('URL' +  `${SpringHostURL}/api/users/username/` + sessionStorage.getItem("CurrentUsername"))
        //Post the username and password as json to the auth endpoint
        return axios.get(`${SpringHostURL}/api/users/username/` + sessionStorage.getItem("CurrentUsername"),{
        },{
            headers: {
                //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*"
            }
        }).then((response) => {
            //The username is retrieved successfully
            //Store username in localStorage
            sessionStorage.setItem("UserID", response.data.id)
            sessionStorage.setItem("FirstName", response.data.firstName)
            sessionStorage.setItem("LastName", response.data.lastName)
            sessionStorage.setItem("Gender", response.data.gender)
            sessionStorage.setItem("Email", response.data.emailAddress)
            sessionStorage.setItem("DOB", response.data.dob)
            sessionStorage.setItem("FitPoints", response.data.fitPoints)
            sessionStorage.setItem("friend", response.data.friend)
            sessionStorage.setItem("apperance", response.data.apperance)
            sessionStorage.setItem("notification", response.data.notification)
            sessionStorage.setItem("health", response.data.health)
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
                throw error
                //Incorrect username/password
            }else if(error.response.status === 400){
                console.error("Error 400 - Incorrect React fronend arguments")
                throw error
                //Axios returned incorrect arguments
                //Check our code in the data arguments to make sure username and password is named correctly.
                //Mainly react server error
            }else{
                console.error("Error: " + error.response.status + " - " + error.response)
                //Some other error to report back
                throw error
            }
        })
    }
}

export default new Authentication()