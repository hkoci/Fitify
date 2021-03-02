//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class weightService {

    //Method to get all activities by the current user
    async getActivity(){
        const userActivitiesResponse = await this.getMarketingData(sessionStorage.getItem('UserID'))

        await console.log(userActivitiesResponse)

        return userActivitiesResponse
    }

    //Method to initialise creating a record
    async createRecord(
        startDateTime,
        endDateTime,
        activityType,
        moodRating,
        caloriesBurnt,
        weight,
        description
    ){
        //Create the activity record
        const activityResponse = await this.createActivity(startDateTime, endDateTime, activityType, moodRating, caloriesBurnt, sessionStorage.getItem('UserID'))

        await console.log('Activity: ', activityResponse)

        //Create the parent weight activity record
        const weightResponse = await this.createWeight(activityResponse, weight, description)

        await console.log('Weight: ', weightResponse)

        return weightResponse
    }
    

    //Method to create Activity data
    async createActivity(
        startDateTime,
        endDateTime,
        activityType,
        moodRating,
        caloriesBurnt,
        userID
    ){
        return axios.post(`${SpringHostURL}/api/activities`,{
            //Json Body content
            "userID": userID,
            "activityStart": startDateTime,
            "activityEnd": endDateTime,
            "activityType": activityType,
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
    async createWeight(
        activityID,
        weight,
        description
    ){
        return axios.post(`${SpringHostURL}/api/activities/weight`,{
            //Json Body content
            "activityID": activityID,
            "weight": weight,
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

export default new weightService()