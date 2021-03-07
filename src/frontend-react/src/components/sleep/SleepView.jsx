//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import Chart
import WeightChart from './visualisation/SleepChart';

//Import Table
import WeightTable from './visualisation/SleepTable';

//Import Weight Input Button
import WeightInput from './actionButton/SleepInput'

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

export default function SleepView(props) {

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