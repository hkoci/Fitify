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

//Import Chart
import WeightChart from './visualisation/WeightChart';

//Import Table
import WeightTable from './visualisation/WeightTable';

//Import Weight Input Button
import WeightInput from './actionButton/weightInput'

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

export default function WeightView(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <WeightChart />
      <WeightTable />
      <WeightInput />
    </div>
  );
}