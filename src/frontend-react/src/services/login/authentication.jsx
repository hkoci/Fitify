//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
const SpringHostURL = 'http://localhost:8080'

//Authentication service class
//Rebased off (TODO: Ref in report) https://github.com/in28minutes/spring-boot-react-fullstack-examples/blob/master/spring-boot-react-basic-auth-login-logout/frontend-spring-boot-react-basic-auth-login-logout/src/service/AuthenticationService.js
//My implementation works differently by getting JWT access tokens from the Spring endpoint - if no token is return, the credentials are incorrect.
class Authentication {

    //Method to create user marketing preferences
    //If successful - the record will be created and the record ID will be returned
    createUserMarketing(
        marketingEmail,
        marketingDailyEmailProgress,
        marketingWeeklyEmailProgress,
        marketingRoadmap,
        marketingProgress,
        marketingAchievements){
            //Create marketing record for this user
            //Use the marketing PostMapping to store this in the User Marketing table
            axios.post(`${SpringHostURL}/api/users/settings/marketing`,{
                //Json Body content of marketing preferences
                "marketingEmailPreference": marketingEmail,
                "dailyEmailProgressPreference": marketingDailyEmailProgress,
                "weeklyEmailProgressPreference": marketingWeeklyEmailProgress,
                "marketingRoadmapPreference": marketingRoadmap,
                "progressPreference": marketingProgress,
                "achievementsPreference": marketingAchievements
            },{
                headers: {
                    //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                    'Content-Type': 'application/json;charset=UTF-8',
                    //"Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                return response.data
            })
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                throw error
                }
            )
        }

    //Method to create user notifications preferences
    //If successful - the record will be created and the record ID will be returned
    createUserNotification(
        notificationDaily,
        notificationWeekly,
        notificationMonthly,
        notificationWeight,
        notificationProgress,
        notificationAchievements){
            //Create notification record for this user
            //Use the notification PostMapping to store this in the User Notification table
            axios.post(`${SpringHostURL}​/api​/users​/settings​/notification`,{
                //Json Body content of notification preferences
                "dailyNotificationProgress": notificationDaily,
                "weeklyNotificationProgress": notificationWeekly,
                "monthlyNotificationProgress": notificationMonthly,
                "weightNotification": notificationWeight,
                "progressNotification": notificationProgress,
                "achievementsNotification": notificationAchievements
            },{
                headers: {
                    //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                    'Content-Type': 'application/json;charset=UTF-8',
                    //"Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                return response.data
            })
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                throw error
                }
            )
        }

    //Method to create user appearance preferences
    //If successful - the record will be created and the record ID will be returned
    createUserAppearance(
        primaryColour,
        secondaryColour,
        avatarColour,
        darkmode,
        highContrast,
        textSize){
            //Create appearance record for this user
            //Use the appearance PostMapping to store this in the User Appearance table
            axios.post(`${SpringHostURL}/api/users/settings/appearance`,{
                //Json Body content of appearance preferences
                "primaryHexColour": primaryColour,
                "secondaryHexColour": secondaryColour,
                "darkMode": darkmode,
                "highContrast": highContrast,
                "textSize": textSize,
                "avatarDefaultColour": avatarColour
            },{
                headers: {
                    //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                    'Content-Type': 'application/json;charset=UTF-8',
                    //"Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                return response.data
            })
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                throw error
                }
            )
        }

    //Method to create user friends
    //If successful - the record will be created and the record ID will be returned
    createUserFriends(){
            //Create friends record for this user
            //Use the appearance PostMapping to store this in the User Friends table
            axios.post(`${SpringHostURL}/api/users/friend`,{
                //Json Body content of user friends
                //TODO: This has to later be changed to a set of integers!
                "userFriendid": 0,
                "friendIds": 0
            },{
                headers: {
                    //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                    'Content-Type': 'application/json;charset=UTF-8',
                    //"Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                return response.data
            })
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                throw error
                }
            )
        }


    //Registration endpoint
    createUser(
        //User information
        firstName,
        lastName,
        username,
        password,
        email,
        gender,
        date,
        //Marketing variables
        marketingEmail,
        marketingDailyEmailProgress,
        marketingWeeklyEmailProgress,
        marketingRoadmap,
        marketingProgress,
        marketingAchievements,
        //Notification variables
        notificationDaily,
        notificationWeekly,
        notificationMonthly,
        notificationWeight,
        notificationProgress,
        notificationAchievements,
        //Appearance variables
        primaryColour,
        secondaryColour,
        avatarColour,
        darkmode,
        highContrast,
        textSize){
            
            //The record ID's for the one-to-one mappings required for creating the user
            //We need the marketing,notification, appearance and friends created before creating the user
            var marketingID = 0, notificationID = 0, appearanceID = 0, friendsID = 0;

            //Create user marketing record and store the record ID in marketingID
            marketingID = this.createUserMarketing(marketingEmail,
                marketingDailyEmailProgress,
                marketingWeeklyEmailProgress,
                marketingRoadmap,
                marketingProgress,
                marketingAchievements);
            
            //Create user notification record and store the record ID in notificationID
            notificationID = this.createUserNotification(notificationDaily,
                notificationWeekly,
                notificationMonthly,
                notificationWeight,
                notificationProgress,
                notificationAchievements)
            
            //Create user appearance record and store the record ID in appearanceID
            appearanceID = this.createUserNotification(primaryColour,
                secondaryColour,
                avatarColour,
                darkmode,
                highContrast,
                textSize)
            
            //Create user friends record and store the record ID in appearanceID
            friendsID = this.createUserFriends()

        }

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

}

export default new Authentication()