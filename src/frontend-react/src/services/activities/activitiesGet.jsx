//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class SleepGet {

    //Method to get all sleep activities by the current user
    async getUserActivity(){
        //Get Activity Data
        const activityDataRes = await this.getActivityData()

        //Filter just results by this user
        const userActivityRes = activityDataRes.filter(function(item){
            return item.userID == sessionStorage.getItem('UserID');         
        });

        return userActivityRes
    }

    //Main Method to get User Data, merge filtered data and return this sleep data only by the user and only activities that are sleep measurements
    async getUserData(){
        //Get Activity User Response
        const activityDataFilter = await this.getUserActivity()

        return activityDataFilter
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

}

export default new SleepGet()