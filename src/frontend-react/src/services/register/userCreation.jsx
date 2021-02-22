//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Import the logging in Authentication service to login the user after creating the account
import Authentication from '../login/authentication'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
const SpringHostURL = 'http://localhost:8080'

//User Creation service class
class userCreation {

    //Method to create user marketing preferences
    //If successful - the record will be created and the record ID will be returned
    createUserMarketing(
        marketingEmail,
        marketingDailyEmailProgress,
        marketingWeeklyEmailProgress,
        marketingRoadmap,
        marketingProgress,
        marketingAchievements)
    {
        //Create marketing record for this user
        //Use the marketing PostMapping to store this in the User Marketing table
        return axios.post(`${SpringHostURL}/api/users/settings/marketing`,{
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
        }).then(response => response.data)
            //The post method was not successful and some error has occured

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)
        .catch(error => console.error(error))
    }
        

    //Method to create user notifications preferences
    //If successful - the record will be created and the record ID will be returned
    createUserNotification(
        notificationDaily,
        notificationWeekly,
        notificationMonthly,
        notificationWeight,
        notificationProgress,
        notificationAchievements)
    {
        //Create notification record for this user
        //Use the notification PostMapping to store this in the User Notification table
        return axios.post(`${SpringHostURL}/api/users/settings/notification`,{
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
        })
        //Successful Request - return the response
        .then(response => response.data)
        .catch((error) => {
            //The post method was not successful and some error has occured

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)

            console.error("[Error", error.response.data.error, "]", "creating notification:" + error.response.data.error)
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
        textSize)
    {
            //Create appearance record for this user
            //Use the appearance PostMapping to store this in the User Appearance table
            return axios.post(`${SpringHostURL}/api/users/settings/appearance`,{
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
            })        
            //Successful Request - return the response
            .then(response => response.data)
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                console.error("[Error", error.response.data.error, "]", "creating user appearance:" + error.response.data.error)
                }
            )
    }

    //Method to create user friends
    //If successful - the record will be created and the record ID will be returned
    createUserFriends()
    {
            //Create friends record for this user
            //Use the appearance PostMapping to store this in the User Friends table
            return axios.post(`${SpringHostURL}/api/users/friend`,{
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
            })
            //Successful Request - return the response
            .then(response => response.data)
            .catch((error) => {
                //The post method was not successful and some error has occured

                //To get error status, we can log it to the console using console.log(error.response.status)
                //To get the error msg, we can log it to the console using console.log(error.response.data.error)

                console.error("[Error", error.response.data.error, "]", "creating friends:" + error.response.data.error)
                }
            )
    }

    //Method to create user friends
    //If successful - the record will be created and the record ID will be returned
    createUserHealthPlan(date){
        //Create friends record for this user
        //Use the appearance PostMapping to store this in the User Friends table

        var age = 0;

        //Check if user has input DOB to work out age
        if(date !== ""){
            //Work out age of the user

            //Set current date and dob as Date objects
            var currentDate = new Date();
            var dateAsDate = new Date(date);

            //Work out age by subtracting year from today
            age = currentDate.getFullYear() - dateAsDate.getFullYear();

            //Check if it is the birthday month and that the birth day has not passed
            var monthCheck = currentDate.getMonth() - dateAsDate.getMonth();

            if (monthCheck < 0 || (monthCheck === 0 && currentDate.getDate() < dateAsDate.getDate())) {
                age--;
            }
        }

        return axios.post(`${SpringHostURL}/api/users/healthplan`,{
            //Json Body content of user friends
            "fitPoints": 0,
            "age": age,
            "weight": 0,
            "height": 0,
            "bodyMassIndex": 0,
            "basalMetabolicRate": 0,
            "intakeCalories": 0,
            "outtakeCalories": 0,
            "targetWeight": 0,
            "targetBMI": 0
        },{
            headers: {
                //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*"
            }
        })
        //Successful Request - return the response
        .then(response => response.data)
        .catch((error) => {
            //The post method was not successful and some error has occured

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)

            console.error("[Error", error.response.data.error, "]", "creating healthplan:" + error.response.data.error)
            }
        )
    }

    //Registration endpoint
    async createUser(
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
        textSize)
    {           
            //The record ID's for the one-to-one mappings required for creating the user
            //We need the marketing, notification, appearance, friends, health plan created before creating the user
            var marketingID, notificationID, appearanceID, friendsID, healthID;

            console.log('Marketing config: ', marketingEmail, marketingDailyEmailProgress, marketingWeeklyEmailProgress, marketingRoadmap, marketingProgress, marketingAchievements)
            console.log('Notification config: ', notificationDaily, notificationWeekly, notificationMonthly, notificationWeight, notificationProgress, notificationAchievements)
            console.log('Appearance config: ', primaryColour, secondaryColour, avatarColour, darkmode, highContrast, textSize)

            //Create user marketing record and store the record ID in marketingID
            await this.createUserMarketing(marketingEmail, marketingDailyEmailProgress, marketingWeeklyEmailProgress, marketingRoadmap, marketingProgress, marketingAchievements).then(response => marketingID = response);
            
            //Create user notification record and store the record ID in notificationID
            await this.createUserNotification(notificationDaily, notificationWeekly, notificationMonthly, notificationWeight, notificationProgress, notificationAchievements).then(response => notificationID = response);
            
            //Create user appearance record and store the record ID in appearanceID
            await this.createUserAppearance(primaryColour, secondaryColour, avatarColour, darkmode, highContrast, textSize).then(response => appearanceID = response);

            //Create user friends record and store the record ID in friendsID
            await this.createUserFriends().then(response => friendsID = response);

            //Create user health plan record and store the record ID in healthID
            await this.createUserHealthPlan(date).then(response => healthID = response);

            await console.log("marketingID",marketingID)

            //Finally, we can create the user record in the Users table using the relevant Spring postmapping
            await axios.post(`${SpringHostURL}/api/users/create`,{
                "username": username,
                "passwordHash": password,
                "role": "user",
                "firstName": firstName,
                "lastName": lastName,
                "gender": gender,
                "emailAddress": email,
                "dob": date,
                "fitPoints": 0,
                "avatarImage": "",
                "friend": friendsID,
                "apperance": appearanceID,
                "notification": notificationID,
                "marketing": marketingID,
                "health": healthID
            },{
                headers: {
                    //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                    'Content-Type': 'application/json;charset=UTF-8',
                    //"Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                //The post method was successful and the user profile is created

                //Authenticate user
                Authentication.getBearerToken(username, password)

                //Return user record id
                return response.data
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

                throw error
           })

    }

}

export default new userCreation()