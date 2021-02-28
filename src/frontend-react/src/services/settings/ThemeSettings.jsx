//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class ThemeSettings {

    //Method to get all appearance settings
    async getAppearanceSettings(){
        var appearanceID;

        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => appearanceID = response.apperance);

        const appearanceResponse = await this.getAppearanceData(appearanceID)

        return appearanceResponse
    }

    //Method to get state value from appearance records
    async getAppearanceState(state){
        var appearanceID, value;

        //Get the marketingID record number from the current user, use the default theme from 'test' user for non-logged in users
        if(sessionStorage.getItem('CurrentUsername') === null || sessionStorage.getItem('CurrentUsername') === undefined){
            await this.initialiseSettingMappings('test').then(response => appearanceID = response.apperance);
        }else{
            await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => appearanceID = response.apperance);
        }

        //Store the response from the marketing data of this user temporarily
        const appearanceResponse = await this.getAppearanceData(appearanceID)

        //Check which state to change
        if(state === 'primaryHexColour'){
            value = appearanceResponse.primaryHexColour;
        }else if(state === 'secondaryHexColour'){
            value = appearanceResponse.secondaryHexColour;
        }else if(state === 'darkMode'){
            value = appearanceResponse.darkMode;
        }else if(state === 'highContrast'){
            value = appearanceResponse.highContrast;
        }else if(state === 'textSize'){
            value = appearanceResponse.textSize;
        }else if(state === 'avatarDefaultColour'){
            value = appearanceResponse.avatarDefaultColour;
        }else{
            //do not display any values - state is incorrect
            return null
        }
        console.log(state,value)

        //Return the value of this state
        return value;
    }

    //Method to get user appearance data
    async getAppearanceData(id){
        return axios.get(`${SpringHostURL}/api/users/settings/appearance/${id}`,{
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

    //Method to set marketing data
    async setAppearanceState(state,value){
        var appearanceID;

        //Get Marketing mapping id
        await this.initialiseSettingMappings(sessionStorage.getItem('CurrentUsername')).then(response => appearanceID = response.apperance);

        //Store the response from the marketing data of this user temporarily
        const appearanceResponse = await this.getAppearanceData(appearanceID)

        //Check which state to change
        if(state === 'primaryHexColour'){
            appearanceResponse.primaryHexColour = value;
        }else if(state === 'secondaryHexColour'){
            appearanceResponse.secondaryHexColour = value;
        }else if(state === 'darkMode'){
            appearanceResponse.darkMode = value;
        }else if(state === 'highContrast'){
            appearanceResponse.highContrast = value;
        }else if(state === 'textSize'){
            appearanceResponse.textSize = value;
        }else if(state === 'avatarDefaultColour'){
            appearanceResponse.avatarDefaultColour = value;
        }else{
            //do not change any values - state is incorrect
        }

        //Update the marketing record accordingly
        await this.updateAppearanceRecord(appearanceID,appearanceResponse);
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
        .catch((error) => {
            console.error(error)
        })
    }

    //Method to modify marketing response data
    async updateAppearanceRecord(id,appearanceResponse){
        return axios.put(`${SpringHostURL}/api/users/settings/appearance/${id}`,appearanceResponse,{
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

    async storeAppearance(){
        const primaryColour = await this.getAppearanceState('primaryHexColour')
        const secondaryColour = await this.getAppearanceState('secondaryHexColour')
        const dark = await this.getAppearanceState('darkMode')
        const contrast = await this.getAppearanceState('highContrast')
        const textSize = await this.getAppearanceState('textSize')

        sessionStorage.setItem("primaryHexColour", primaryColour)
        sessionStorage.setItem("secondaryHexColour", secondaryColour)
        sessionStorage.setItem("darkMode", dark)
        sessionStorage.setItem("highContrast", contrast)
        sessionStorage.setItem("textSize", textSize)
    }

}

export default new ThemeSettings()