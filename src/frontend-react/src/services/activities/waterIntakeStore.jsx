//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class waterIntakeStore {

    // Method to initialise creating a record
    async createRecord(
        startDateTime,
        endDateTime,
        activityType,
        moodRating,
        waterIntake,
        description
    ){
        //Create the activity record
        const activityResponse = await this.createActivity(startDateTime, endDateTime, activityType, moodRating, waterIntake, sessionStorage.getItem('UserID'))

        //Create the parent water intake activity record
        const waterIntakeResponse = await this.createWaterIntake(activityResponse, waterIntake, description)

        return waterIntakeResponse
    }
    

    //Method to create Activity data
    async createActivity(
        startDateTime,
        endDateTime,
        activityType,
        moodRating,
        userID
    ){
        return axios.post(`${SpringHostURL}/api/activities`,{
            //Json Body content
            "userID": userID,
            "activityStart": startDateTime,
            "activityEnd": endDateTime,
            "activityType": activityType,
            "moodRating": moodRating
        },{
            headers: {
                //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                'Content-Type': 'application/json;charset=UTF-8',
                //Set Bearer Token JWT auth
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(response => response.data)
            //The post method was not successful and some error has occured

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)
        .catch(error => console.error(error))
    }

    //Method to create Water Intake activity
    async createWaterIntake(
        activityID,
        waterIntake,
        description
    ){
        return axios.post(`${SpringHostURL}/api/activities/waterIntake`,{
            //Json Body content
            "activityID": activityID,
            "waterIntake": waterIntake,
            "description": description
        },{
            headers: {
                //Set the post content as application/json (Spring will not recognise text for this auth endpoint PostMapping)
                'Content-Type': 'application/json;charset=UTF-8',
                //Set Bearer Token JWT auth
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(response => response.data)
            //The post method was not successful and some error has occured

            //To get error status, we can log it to the console using console.log(error.response.status)
            //To get the error msg, we can log it to the console using console.log(error.response.data.error)
        .catch(error => console.error(error))
    }

}

export default new waterIntakeStore()