//Import React library
import React, {useState, useEffect} from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import material-ui typography
import Typography from '@material-ui/core/Typography';

//Import Material-ui layout
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Import Material-ui colour picker
import ColorPicker from 'material-ui-color-picker'

//Import Material-ui forms
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatSizeIcon from '@material-ui/icons/FormatSize';

//Import Settings
import MarketingSettings from '../../../services/settings/MarketingSettings'
import ThemeSettings from '../../../services/settings/ThemeSettings'

//Include React Router history (5.1+ required) - mitigation from nested components
import { useHistory } from "react-router-dom";

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

  

export default function SettingsAppearance(props) {

  const classes = useStyles();
  let history = useHistory();

  // ------------------------- Appearance States and handlers ------------------------- //
  const [appearance, setAppearance] = React.useState(
      ThemeSettings.getAppearanceSettings()
  );

    //Load settings data before render
    useEffect(() => {
        setAppearance(ThemeSettings.getAppearanceSettings());
    }, []);

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedAppearanceChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    ThemeSettings.setAppearanceState(event.target.name,event.target.checked);
    //Set form value
    setAppearance({ ...appearance, [event.target.name]: event.target.checked });
    //Set storage value
    //sessionStorage.setItem(event.target.name, event.target.checked)
    history.push('/app/dashboard');
    history.push('/app/settings');
  };

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedAppearanceColourChange = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    ThemeSettings.setAppearanceState(event.target.name,event.target.value);
    //Change internal React state
    setAppearance({ ...appearance, [event.target.name]: event.target.value });
    //Reload component theme delay by 100ms (to prevent infinite reloading whilst dragging colour slider)
    setTimeout(function(){ history.push('/app/settings');}, 100);
  };

  return (
    <div className={classes.root}>
    <Container fixed>
        <Typography variant="h5" component="h5" className={classes.headingsTextAlt}>
        Appearance
        </Typography>
            <Paper>
            <Grid container spacing={2}>
            <Grid item xs={10} xl={11}>
                <Typography className={classes.settingLabel}>
                    Appearance settings take effect when you change page
                </Typography>
                </Grid>
            <Grid item xs={12}>
            <ColorPicker
                fullWidth
                name='primaryHexColour'
                label='Primary Theme Colour'
                defaultValue={'◼ Primary Colour'}
                value={appearance.primaryHexColour || sessionStorage.getItem("primaryHexColour") }
                onChange={colourVal => handleCheckedAppearanceColourChange({"target": {"name": "primaryHexColour", "value": colourVal} })}
            
            />
            </Grid>

            <Grid item xs={12}>
            <ColorPicker
                fullWidth
                name='secondaryHexColour'
                label='Secondary Theme Colour'
                defaultValue={'◼ Secondary Colour'}
                value={appearance.secondaryHexColour || sessionStorage.getItem("secondaryHexColour")}
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
                control={<Checkbox checked={appearance.highContrast || sessionStorage.getItem("highContrast")} onChange={handleCheckedAppearanceChange} name="highContrast" />}
                label="High Contrast"
            />
            </Grid>
            
            </Grid>
        </Paper>
    </Container>
    </div>
  );
}