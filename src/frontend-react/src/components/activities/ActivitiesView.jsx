//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import Activities Table
import ActivitiesTable from './visualisation/ActivitiesTable';

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

export default function ActivitiesView(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ActivitiesTable />
    </div>
  );
}