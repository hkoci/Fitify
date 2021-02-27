//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import Material-ui layout
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Activities(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>

      </Container>
    </div>
  );
}