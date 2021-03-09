//Import React library
import React, {useState, useEffect} from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Material-Ui grid
import Grid from '@material-ui/core/Grid'

//Import Activities Table
import PostStatusCreation from './card/createPost';
import cardPost from './card/cardPost';

//Import Social service
import PostGet from '../../services/post/postGet'
import PostSet from '../../services/post/postSet'

import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function SocialView(props) {

  const classes = useStyles();

    //Load table data before render
    useEffect(() => {
      PostGet.getPosts().then(dataResponse => {
          //Change ActivityID to id (required ID field for DataGrid)
          var DataGridID = dataResponse.map(item => { return { ...item, id: item.postID }; });

          console.log(DataGridID)

          //Update Row fields
          //setTableRow(DataGridID);
        })
      }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify = "center">
        <PostStatusCreation />
        <cardPost />
      </Grid>
    </div>
  );
}