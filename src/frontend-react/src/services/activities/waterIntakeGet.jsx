//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class waterIntakeGet {

    //Method to get all water intake activities by the current user
    async getUserActivity(){
        //Get Activity Data
        const activityDataRes = await this.getActivityData()

        console.log('act', activityDataRes)

        //Filter just results by this user
        const userActivityRes = activityDataRes.filter(function(item){
            return item.userID == sessionStorage.getItem('UserID');         
        });

        console.log('usr', userActivityRes)

        //Finally, filter results by water intake measurements
        const userActivityWaterIntake = userActivityRes.filter(function(item){
            return item.activityType == 'waterIntake'
        });

        console.log('filt', userActivityWaterIntake)

        return userActivityWaterIntake
    }

    //Method to get all water intake measurements by the current user
    async getUserWaterIntake(userActivityWaterIntake){
        //Get filtered data from the user that only contains water intake measurements
        const waterIntakeDataRes = await this.getWaterIntakeData()

        //Filter out just the activityID's from WeightData
        var userActivities = userActivityWaterIntake.map(a => a.activityID);

        //Filter just results from the filtered UserID and WaterIntakeMeasurement from previous filter
        const filteredWaterIntakes = waterIntakeDataRes.filter(item => userActivities.includes(item.activityID));

        //Merge the userActivity object with the userActivityWater object using the arrays.map function
        const mergedResponses = userActivityWaterIntake.map(activityMapping => ({...activityMapping, ...filteredWaterIntakes.find(waterIntakeMapping => waterIntakeMapping.activityID === activityMapping.activityID)}))

        return mergedResponses
    }

    //Main Method to get User Data, merge filtered data and return this water intake data only by the user and only activities that are water intake
    async getUserData(){
        //Get Activity User Response
        const activityDataFilter = await this.getUserActivity()

        //Get those activity Water Intake data now
        const WaterIntakeDataFilterMerge = await this.getUserWaterIntake(activityDataFilter)

        return WaterIntakeDataFilterMerge
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

    //Method to get activity water intake data
    async getWaterIntakeData(){
        return axios.get(`${SpringHostURL}/api/activities/water`,{
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

export default new waterIntakeGet()