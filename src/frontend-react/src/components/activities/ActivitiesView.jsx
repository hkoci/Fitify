//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import Material-ui preloader
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//Import material-ui typography
import Typography from '@material-ui/core/Typography';

//Import Material-ui layout
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//Import Material-ui Floating Button
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

export default function Activities(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Fab color="primary" aria-label="add" className={classes.extendedIcon}>
        <AddIcon />
        </Fab>
      </Container>
    </div>
  );
}