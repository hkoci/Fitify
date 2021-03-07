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

  //const [state, setState] = React.useState(MarketingSettings.getMarketingSettings());

  // ------------------------- Notification States and handlers ------------------------- //
  const [notification, setNotification] = React.useState({
    blankTOBEDONE: MarketingSettings.getMarketingState('achievementsPreference'),
  });

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedNotificationChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleNotificationChange(event);
  };

  const handleNotificationChange = (event) => {
    setNotification({ ...notification, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
    <Container fixed>
        <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
        Notifications
        </Typography>

        <Paper>
        
        <Grid container spacing={3}>
        <Grid item xs={12} xl={12}>
            <Typography className={classes.settingLabel}>
                📆 Daily activity
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationDaily"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                📅 Weekly activity
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationWeekly"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                ⌛ Monthly activity
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationMonthly"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🤸🏻 Missed weight recordings
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationWeight"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🤸🏻‍♂️ Fitness progress
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationProgress"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                className={classes.switch}
            />
            <Typography className={classes.settingLabel}>
                🏆 Achievements
            </Typography>
            <Switch
                checked={notification.blankTOBEDONE}
                onChange={handleCheckedNotificationChange}
                name="notificationAchievements"
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