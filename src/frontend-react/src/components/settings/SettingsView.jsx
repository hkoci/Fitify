//Import React library
import React from 'react';

//Import Material-ui theming 
import { makeStyles } from '@material-ui/core/styles';

//Import Settings components
import AppearanceSettings from './preferences/SettingsAppearance';
import MarketingSettings from './preferences/SettingsMarketing';
import NotificationsSettings from './preferences/SettingsNotifications';
import PersonalSettings from './preferences/SettingsPersonal'; 

//Material-Ui CSS baseline theme (manipulates colour palettes for dark/light)
import CssBaseline from '@material-ui/core/CssBaseline';

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

export default function SettingsView(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <PersonalSettings />
      <AppearanceSettings />
      <NotificationsSettings />
      <MarketingSettings />

    </div>
  );
}