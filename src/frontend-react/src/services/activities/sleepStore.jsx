//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class SleepStore {

    //Method to initialise creating a record
    async createRecord(
        startDateTime,
        endDateTime,
        moodRating,
        caloriesBurnt,
        sleepDate,
        sleepTime,
        awakeTime,
        sleepingHrs,
    ){
        //Create the activity record
        const activityResponse = await this.createActivity(startDateTime, endDateTime, moodRating, caloriesBurnt, sessionStorage.getItem('UserID'))

        //Create the parent sleep activity record
        const sleepResponse = await this.createSleep(activityResponse, sleepDate, sleepTime, awakeTime, sleepingHrs)

        return sleepResponse
    }
    

    //Method to create Activity data
    async createActivity(
        startDateTime,
        endDateTime,
        moodRating,
        caloriesBurnt,
        userID
    ){
        return axios.post(`${SpringHostURL}/api/activities`,{
            //Json Body content
            "userID": userID,
            "activityStart": startDateTime,
            "activityEnd": endDateTime,
            "activityType": "sleep",
            "moodRating": moodRating,
            "caloriesBurnt": caloriesBurnt
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

    //Method to create Weight activity
    async createSleep(
        activityID,
        sleepDate,
        sleepTime,
        awakeTime,
        sleepingHrs
    ){
        return axios.post(`${SpringHostURL}/api/activities/sleep`,{
            //Json Body content
            "activityID": activityID,
            "sleepDate": sleepDate,
            "sleepTime": sleepTime,
            "awakeTime": awakeTime,
            "sleepingHrs": sleepingHrs
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

export default new SleepStore()