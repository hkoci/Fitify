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
    
    }
    

    //Method to create marketing data
    async createActivity(
        startDateTime,
        endDateTime,
        activityType,
        moodRating,
        caloriesBurnt,
        userID
    ){

    }

    //Method to create weight activity
    async createWeight(
        activityID,
        weight,
        description
    ){

    }

}

export default new weightService()