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

//Import Settings
import MarketingSettings from '../../../services/settings/MarketingSettings'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      },
    headingsText: {
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
    },

    headingsTextAlt: {
      paddingTop: theme.spacing(6),
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
    },

    settingLabel: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },

    switch: {
      marginTop: theme.spacing(-6),
      marginRight: theme.spacing(3),
      float: 'right'
    }
  }));

  

export default function Navbar(props) {

  const classes = useStyles();

  // ------------------------- Marketing States and handlers ------------------------- //

  const [marketing, setMarket] = React.useState({
    achievementsPreference: MarketingSettings.getMarketingState('achievementsPreference'),
    dailyEmailProgressPreference: MarketingSettings.getMarketingState('dailyEmailProgressPreference'),
    marketingEmailPreference: MarketingSettings.getMarketingState('marketingEmailPreference'),
    marketingRoadmapPreference: MarketingSettings.getMarketingState('marketingRoadmapPreference'),
    progressPreference: MarketingSettings.getMarketingState('progressPreference'),
    weeklyEmailProgressPreference: MarketingSettings.getMarketingState('weeklyEmailProgressPreference'),
  });

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedMarketingChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleMarketChange(event);
  };

  const handleMarketChange = (event) => {
    setMarket({ ...marketing, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
    <Container fixed>
        <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
        Marketing
        </Typography>
        <Paper>

        <Grid container spacing={3}>
            <Grid item xs={12} xl={12}>
            <Typography className={classes.settingLabel}>
                📩 Marketing communications
            </Typography>
            <Switch
                checked={marketing.marketingEmailPreference}
                onChange={handleCheckedMarketingChange}
                name="marketingEmailPreference"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                📆 Daily health progress
            </Typography>
            <Switch
                checked={marketing.dailyEmailProgressPreference}
                onChange={handleCheckedMarketingChange}
                name="dailyEmailProgressPreference"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                📅 Weekly health progress
            </Typography>
            <Switch
                checked={marketing.weeklyEmailProgressPreference}
                onChange={handleCheckedMarketingChange}
                name="weeklyEmailProgressPreference"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🏆 Achievements gained
            </Typography>
            <Switch
                checked={marketing.achievementsPreference}
                onChange={handleCheckedMarketingChange}
                name="achievementsPreference"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🚗 Roadmap development plans
            </Typography>
            <Switch
                checked={marketing.marketingRoadmapPreference}
                onChange={handleCheckedMarketingChange}
                name="marketingRoadmapPreference"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🔧 Current development progress
            </Typography>
            <Switch
                checked={marketing.weeklyEmailProgressPreference}
                onChange={handleCheckedMarketingChange}
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