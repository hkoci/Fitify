import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  WaterDrankGoal: {
    opacity: 0.4,
    display: 'inline'
  }
});

export default function WaterDrank() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Water Drank</Title>
      <Typography component="p" variant="h4">
        1.35L <div className={classes.WaterDrankGoal} color='secondary'>/ 2L</div>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        today
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Change your goal (2L)
        </Link>
      </div>
    </React.Fragment>
  );
}