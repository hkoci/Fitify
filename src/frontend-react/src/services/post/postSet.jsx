//Import Axios library to proxy requests to Spring server
import axios from 'axios'

//Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*
import { SpringHostURL } from '../../constants/constant'

class PostSet {

    //Method to initialise creating a record
    async createPost(
        description
    ){
        //Create the post record
        const activityResponse = await this.createPostData(sessionStorage.getItem('UserID'), description, false, false, '')

        return activityResponse
    }

    //Method to create post
    async createPostData(
        userID,
        post,
        publicVisibility,
        friendsVisibility,
        tags
    ){
        return axios.post(`${SpringHostURL}/api/posts`,{
            //Json Body content
            "userID": userID,
            "post": post,
            "publicVisibility": publicVisibility,
            "friendsVisibility": friendsVisibility,
            "tags": tags,
            "userLiked": 0
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

export default new PostSet()