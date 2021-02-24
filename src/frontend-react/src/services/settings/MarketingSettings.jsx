//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
const SpringHostURL = 'http://localhost:8080'

class MarketingSettings {

    //Method to get user setting mappings
    async getMarketingSettings(){
        var user, marketingID;

        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => marketingID = response.marketing);

        return this.getMarketingData(marketingID)

    }
    
    //Method to get user setting mappings
    async initialiseSettingMappings(username){
        return axios.get(`${SpringHostURL}/api/users/username/${username}`,{
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

    //Method to get user setting mappings
    async getMarketingData(id){
        return axios.get(`${SpringHostURL}/api/users/settings/marketing/${id}`,{
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

}

export default new MarketingSettings()