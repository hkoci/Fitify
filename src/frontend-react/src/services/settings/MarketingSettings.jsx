//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class MarketingSettings {

    //Method to get all marketing settings
    async getMarketingSettings(){
        var marketingID;

        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => marketingID = response.marketing);

        const marketingResponse = await this.getMarketingData(marketingID)

        //await console.log(marketingResponse)

        return marketingResponse
    }

    //Method to get marketingEmailPreference
    async getMarketingState(state){
        var marketingID, value;

        //Get the marketingID record number from the current user
        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => marketingID = response.marketing);

        //Store the response from the marketing data of this user temporarily
        const marketingResponse = await this.getMarketingData(marketingID)

        //Check which state to change
        if(state === 'achievementsPreference'){
            value = marketingResponse.achievementsPreference;
        }else if(state === 'dailyEmailProgressPreference'){
            value = marketingResponse.dailyEmailProgressPreference;
        }else if(state === 'marketingEmailPreference'){
            value = marketingResponse.marketingEmailPreference;
        }else if(state === 'marketingRoadmapPreference'){
            value = marketingResponse.marketingRoadmapPreference;
        }else if(state === 'progressPreference'){
            value = marketingResponse.progressPreference;
        }else if(state === 'weeklyEmailProgressPreference'){
            value = marketingResponse.weeklyEmailProgressPreference;
        }else{
            //do not display any values - state is incorrect
        }

        console.log(state,value)

        //Return the value of this state
        return value;
    }

    //Method to set marketing data
    async setMarketingState(state,value){
        var marketingID;

        //Get Marketing mapping id
        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => marketingID = response.marketing);

        //Store the response from the marketing data of this user temporarily
        const marketingResponse = await this.getMarketingData(marketingID)

        //Check which state to change
        if(state === 'achievementsPreference'){
            marketingResponse.achievementsPreference = value;
        }else if(state === 'dailyEmailProgressPreference'){
            marketingResponse.dailyEmailProgressPreference = value;
        }else if(state === 'marketingEmailPreference'){
            marketingResponse.marketingEmailPreference = value;
        }else if(state === 'marketingRoadmapPreference'){
            marketingResponse.marketingRoadmapPreference = value;
        }else if(state === 'progressPreference'){
            marketingResponse.progressPreference = value;
        }else if(state === 'weeklyEmailProgressPreference'){
            marketingResponse.weeklyEmailProgressPreference = value;
        }else{
            //do not change any values - state is incorrect
        }

        //Update the marketing record accordingly
        await this.updateMarketingRecord(marketingID,marketingResponse);
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

    //Method to modify marketing response data
    async updateMarketingRecord(id,marketingResponse){
        return axios.put(`${SpringHostURL}/api/users/settings/marketing/${id}`,marketingResponse,{
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