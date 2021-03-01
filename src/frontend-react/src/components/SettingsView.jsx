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

//Import Material-ui colour picker
import ColorPicker from 'material-ui-color-picker'

//Import Material-ui forms
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatSizeIcon from '@material-ui/icons/FormatSize';

//Import Settings
import MarketingSettings from '../services/settings/MarketingSettings'
import ThemeSettings from '../services/settings/ThemeSettings'

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
      marginTop: theme.spacing(-6),
      marginRight: theme.spacing(3),
      float: 'right'
    }
  }));

  

export default function Navbar(props) {

  const classes = useStyles();

  //const [state, setState] = React.useState(MarketingSettings.getMarketingSettings());

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

  // ------------------------- Appearance States and handlers ------------------------- //
  const [appearance, setAppearance] = React.useState({
    primaryHexColour: ThemeSettings.getAppearanceState('primaryHexColour'),
    secondaryHexColour: ThemeSettings.getAppearanceState('secondaryHexColour'),
    darkMode: ThemeSettings.getAppearanceState('darkMode'),
    highContrast: ThemeSettings.getAppearanceState('highContrast'),
    textSize: ThemeSettings.getAppearanceState('textSize'),
  });

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedAppearanceChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleAppearanceChange(event);
  };

  const handleAppearanceChange = (event) => {
    setAppearance({ ...appearance, [event.target.name]: event.target.checked });
  };

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedAppearanceColourChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    MarketingSettings.setMarketingState(event.target.name,event.target.value);
    //Change internal React state
    handleAppearanceColourChange(event);
  };

  const handleAppearanceColourChange = (event) => {
    setAppearance({ ...appearance, [event.target.name]: event.target.value });
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
                  Personal settings go here
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
            Appearance
          </Typography>
          <Paper>
          <Grid container spacing={2}>
          <Grid item xs={10} xl={11}>
                <Typography className={classes.settingLabel}>
                  Appearance settings take effect on a page reload
                </Typography>
              </Grid>
          <Grid item xs={12}>
            <ColorPicker
              fullWidth
              name='primaryHexColour'
              label='Primary Theme Colour'
              defaultValue={'◼ Primary Colour'}
              value={appearance.primaryHexColour}
              onChange={colourVal => handleCheckedAppearanceColourChange({"target": {"name": "primaryHexColour", "value": colourVal} })}
            
            />
          </Grid>

          <Grid item xs={12}>
            <ColorPicker
              fullWidth
              name='secondaryHexColour'
              label='Secondary Theme Colour'
              defaultValue={'◼ Secondary Colour'}
              value={appearance.secondaryHexColour}
              onChange={colourVal => handleCheckedAppearanceColourChange({"target": {"name": "secondaryHexColour", "value": colourVal} })}
            
            />
          </Grid>

          <Grid item xs={12}> 
            <Typography id="discrete-slider" gutterBottom>
              Font Size
            </Typography>

            <Grid container spacing={2}>
              <Grid item>
              <TextFormatIcon />
              </Grid>
              <Grid item xs>
                <Slider
                  defaultValue={12}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={2}
                  marks
                  min={10}
                  max={30}
                />
              </Grid>
              <Grid item>
              <FormatSizeIcon />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
          <FormControlLabel
                control={<Checkbox checked={appearance.darkMode} onChange={handleCheckedAppearanceChange} name="darkMode" />}
                label="Dark Mode"
              />
          </Grid>

          <Grid item xs={12}>
          <FormControlLabel
                control={<Checkbox checked={appearance.highContrast} onChange={handleCheckedAppearanceChange} name="highContrast" />}
                label="High Contrast"
              />
          </Grid>
          
          </Grid>
          </Paper>

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