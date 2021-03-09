//Import React library
import React, {useState, useEffect} from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Material-Ui grid
import Grid from '@material-ui/core/Grid'

//Import Activities Table
import PostStatusCreation from './card/createPost';
import PostTable from './visualisation/PostsTable';

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify = "center">
        <PostStatusCreation />
        <PostTable/>
      </Grid>
    </div>
  );
}