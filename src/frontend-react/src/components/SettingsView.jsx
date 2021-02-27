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

//Import Material-ui Switches
import Switch from '@material-ui/core/Switch';

//Import Settings
import MarketingSettings from '../services/settings/MarketingSettings'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      },
    headingsText: {
      padding: theme.spacing(3),
      color: '#404040',
    },

    headingsTextAlt: {
      paddingTop: theme.spacing(6),
      padding: theme.spacing(3),
      color: '#404040',
    },

    settingLabel: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },

    switch: {
      marginBottom: theme.spacing(2.5),
    }
  }));

  

export default function Navbar(props) {

  const classes = useStyles();

  //const [state, setState] = React.useState(MarketingSettings.getMarketingSettings());
 
  const [state, setState] = React.useState({
    achievementsPreference: MarketingSettings.getMarketingState('achievementsPreference'),
    dailyEmailProgressPreference: MarketingSettings.getMarketingState('dailyEmailProgressPreference'),
    marketingEmailPreference: MarketingSettings.getMarketingState('marketingEmailPreference'),
    marketingRoadmapPreference: MarketingSettings.getMarketingState('marketingRoadmapPreference'),
    progressPreference: MarketingSettings.getMarketingState('progressPreference'),
    weeklyEmailProgressPreference: MarketingSettings.getMarketingState('weeklyEmailProgressPreference'),
  }); 

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleChange(event);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }; 

  return (
    <div className={classes.root}>
    <Container fixed>

          <Typography variant="h5" component="h5" className={classes.headingsText}>
            Personal
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
                  checked={state.marketingEmailPreference}
                  onChange={handleCheckedChange}
                  name="marketingEmailPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  textalignContent='right'
                  alignItems='right'
                />
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
            Appearance
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

          <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
            Notifications
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

          <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
            Marketing
          </Typography>
          <Paper>

            <Grid container spacing={3}>
              <Grid item xs={10} xl={11}>
                <Typography className={classes.settingLabel}>
                  📩 Marketing communications
                </Typography>
                <Typography className={classes.settingLabel}>
                  📆 Daily health progress
                </Typography>
                <Typography className={classes.settingLabel}>
                  📅 Weekly health progress
                </Typography>
                <Typography className={classes.settingLabel}>
                  🏆 Achievements gained
                </Typography>
                <Typography className={classes.settingLabel}>
                  🚗 Roadmap development plans
                </Typography>
                <Typography className={classes.settingLabel}>
                  🔧 Current development progress
                </Typography>
              </Grid>
              <Grid item xs={2} xl={1}>
                <Switch
                  checked={MarketingSettings.getMarketingState('dailyEmailProgressPreference')}
                  onChange={handleCheckedChange}
                  name="marketingEmailPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
                <Switch
                  checked={state.dailyEmailProgressPreference}
                  onChange={handleCheckedChange}
                  name="dailyEmailProgressPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
                <Switch
                  checked={state.weeklyEmailProgressPreference}
                  onChange={handleCheckedChange}
                  name="weeklyEmailProgressPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
                <Switch
                  checked={state.achievementsPreference}
                  onChange={handleCheckedChange}
                  name="achievementsPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
                <Switch
                  checked={state.marketingRoadmapPreference}
                  onChange={handleCheckedChange}
                  name="marketingRoadmapPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
                <Switch
                  checked={state.weeklyEmailProgressPreference}
                  onChange={handleCheckedChange}
                  name="weeklyEmailProgressPreference"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  className={classes.switch}
                />
              </Grid>

              
            </Grid>
          </Paper>

    </Container>
    </div>
  );
}