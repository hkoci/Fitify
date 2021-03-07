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
import CssBaseline from '@material-ui/core/CssBaseline';
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

  

export default function SettingsPersonal(props) {

  const classes = useStyles();

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
    </Container>
    </div>
  );
}