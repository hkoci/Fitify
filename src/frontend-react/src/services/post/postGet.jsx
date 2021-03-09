//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class PostGet {

    //Main Method to get all post data
    async getPosts(){
        const postData = await this.getPostData()

        return postData
    }

    //Method to get all weight measurements by the current user
    async getPostsUserDetails(){
        //Get postData from the Posts table
        const postData = await this.getPostData()

        //Get data from the users table to be combined
        const userData = await this.getUserData()

        //Filter out just the the userIDs that have posted (get list of ids)
        var userIDList = postData.map(a => a.userID);

        //Filter all user data of these ids
        const filteredPosts = userData.filter(item => userIDList.includes(item.id));

        //Merge the post object with the user details using the arrays.map function
        const mergedResponses = postData.map(postMap => ({...postMap, ...filteredPosts.find(usrMap => usrMap.id === postMap.userID)}))

        //Map the id field as nothing so that these can be removed (table will sort out id to the postID)
        const responseWithoutID = mergedResponses.map(({ id, ...item }) => item);

        //Finally return the result
        return responseWithoutID
    }

    //Method to get post data
    async getPostData(){
        return axios.get(`${SpringHostURL}/api/posts`,{
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

    //Method to get user data
    async getUserData(){
        return axios.get(`${SpringHostURL}/api/users`,{
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

export default new PostGet()