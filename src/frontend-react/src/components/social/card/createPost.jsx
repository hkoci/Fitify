import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

//Post store service
import PostSet from '../../../services/post/postSet';

//Include React Router history (5.1+ required) - mitigation from nested components
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80vw',
    height: 100
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {

  const classes = useStyles();

  let history = useHistory();

  const [post, setPost] = React.useState({
    description: '',
    invalidPost: false
  });

  const handleFormChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  //Method to create Activity and Weight using the WeightService
  const submitInput = () => {

    //Validation - (BASE CASE): Check if the post is not blank before continuing
    if((post.description === null || post.description === '')){

      var invalidPost = false

      //If the post has not been input
      if(post.description === null || post.description === ''){
        invalidPost = true
      }else{
        invalidPost = false
      }

      //Set error state
      setPost({ ...post,
        invalidPost: invalidPost,
       });

    }else{

      //Reset error state to false
      setPost({ ...post,
        invalidPost: false,
       });

       console.log('desc',post.description)

      PostSet.createPost(post.description
      ).then(() => {
        //Successful Creation
        
        //Clear status text
        setPost({ ...post,
          description: null,
         });

        //Reload component by routing to a different component and back again
        history.push('/app/dashboard');
        history.push('/app/social');
      }).catch((error) => {
        //TODO: Error handling dialog,message,etc.
      })
    }
  }

  return (
    <Paper className={classes.root}>
      <TextField
        className={classes.input}
        placeholder="Share what's new..."
        inputProps={{ 'aria-label': 'text you wish to post' }}
        value={post.description || null}
        name="description"
        onChange={handleFormChange}
        error={post.invalidPost}
        helperText={post.invalidPost && "Post should not be blank"}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="post" onClick={submitInput}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
}