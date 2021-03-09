// Base imports
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Chart and components
import Chart from './Chart';
import WaterDrank from './WaterDrank';
import Activities from './Activities';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  welcomeMessage: {
    fontWeight: 'bold',
    textShadow: '4px 4px black',
    transform: 'translateX(2rem)'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Welcome message */}
            <Grid item xs={12}>
              <Typography className={classes.welcomeMessage} variant='h2' color='primary'>Welcome back, {sessionStorage.getItem('FirstName')}</Typography>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Water Usage */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <WaterDrank />
              </Paper>
            </Grid>
            {/* Recent Activities */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Activities />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}