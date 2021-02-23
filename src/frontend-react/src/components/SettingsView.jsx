//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import material-ui typography
import Typography from '@material-ui/core/Typography';

//Import Material-ui layout
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Import Material-ui Switches
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      },
    headingsText: {
      padding: theme.spacing(3),
      color: '#404040',
    },
    settingLabel: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    }
  }));

export default function Navbar(props) {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
    <Container fixed>
          <Typography variant="h5" component="h5" className={classes.headingsText}>
            Settings
          </Typography>
          <Paper>
            <Grid container spacing={3}>
              <Grid item xs={10} xl={11}>
                <Typography className={classes.settingLabel}>
                  Some very long setting text goes here. Test a couple of words in a setence - thanks for using Fitify :)
                </Typography>
              </Grid>
              <Grid item xs={2} xl={1}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  textalignContent='right'
                  alignItems='right'
                />
              </Grid>
            </Grid>
          </Paper>
    </Container>
    </div>
  );
}