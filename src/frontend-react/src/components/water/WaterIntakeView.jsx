//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import WaterIntake Chart
import WaterIntakeChart from './WaterIntakeChart';

//Import WaterIntake Table
import WaterIntakeTable from './WaterIntakeTable';

//Import WaterIntake Input Button
import WaterIntakeInput from './WaterIntakeInput';

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

export default function WaterIntakeView() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <WaterIntakeChart />
      <WaterIntakeTable />
      <WaterIntakeInput />
    </div>
  );
}