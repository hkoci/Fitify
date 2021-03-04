//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class WeightGet {

    //Method to get all weight activities by the current user
    async getUserActivity(){
        //Get Activity Data
        const activityDataRes = await this.getActivityData()

        //Filter just results by this user
        const userActivityRes = activityDataRes.filter(function(item){
            return item.userID == sessionStorage.getItem('UserID');         
        });

        //Finally, filter results by weight measurements
        const userActivityWeight = userActivityRes.filter(function(item){
            return item.activityType == 'weight'        
        });

        return userActivityWeight
    }

    //Method to get all weight measurements by the current user
    async getUserWeight(userActivityWeight){
        //Get filtered data from the user that only contains weight measurements
        const weightDataRes = await this.getWeightData()

        //Filter out just the activityID's from WeightData
        var userActivities = userActivityWeight.map(a => a.activityID);

        //Filter just results from the filtered UserID and WeightMeasurement from previous filter
        const filteredWeights = weightDataRes.filter(item => userActivities.includes(item.activityID));

        //Merge the userActivity object with the userWeight object using the arrays.map function
        const mergedResponses = userActivityWeight.map(activityMapping => ({...activityMapping, ...filteredWeights.find(weightMapping => weightMapping.activityID === activityMapping.activityID)}))

        return mergedResponses
    }

    //Main Method to get User Data, merge filtered data and return this weight data only by the user and only activities that are weights
    async getUserData(){
        //Get Activity User Response
        const activityDataFilter = await this.getUserActivity()

        console.log('UserARR', activityDataFilter)

        //Get those activity Weight data now
        const weightDataFilter = await this.getUserWeight(activityDataFilter)

        console.log('WeightARR', weightDataFilter)

        //TODO: Merge two arrays together

        return weightDataFilter
    }

    //Method to get activity data
    async getActivityData(){
        return axios.get(`${SpringHostURL}/api/activities`,{
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

    //Method to get activity weight data
    async getWeightData(){
        return axios.get(`${SpringHostURL}/api/activities/weight`,{
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

export default new WeightGet()