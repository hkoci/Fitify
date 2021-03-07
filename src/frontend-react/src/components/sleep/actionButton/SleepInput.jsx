import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

//Import Material-ui Floating Button
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

//Material-Ui Pickers
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

//Material-Ui Rating
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

//Material-Ui Rating Icons
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

//Material-Ui TextField
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

//SleepService CRUD
import SleepStoreService from '../../../services/activities/sleepStore'

//Include React Router history (5.1+ required) - mitigation from nested components
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  extendedIcon: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

const likertIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{likertIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function SleepInput() {
  const classes = useStyles();
  let history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //Reset all states to default
    setActivity({
      moodRating: 0,
      sleepDate: '',
      sleepTime: '',
      awakeTime: '',
      invalidDate: false,
      invalidSleep: false,
      invalidAwake: false
    });
  };

  // ------------------------- Activity States and handlers ------------------------- //

  const [activity, setActivity] = React.useState({
      moodRating: 0,
      sleepDate: '',
      sleepTime: '',
      awakeTime: '',
      invalidDate: false,
      invalidSleep: false,
      invalidAwake: false
  });

  const handleFormChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  //Custom method to handle Date object to be seen as a React SyntheticEvent by using the target object layout
  const handleDateChange = (dateArg) => {
    var dateEventObj = {"target": {"name": "sleepDate", "value": dateArg} }
    handleFormChange(dateEventObj);
  };

  //Custom method to handle sleep time object to be seen as a React SyntheticEvent by using the target object layout
  const handleSleepChange = (timeArg) => {
    var sleepEventObj = {"target": {"name": "sleepTime", "value": timeArg} }
    handleFormChange(sleepEventObj);
  };

  //Custom method to handle awake time object to be seen as a React SyntheticEvent by using the target object layout
  const handleAwakeChange = (timeArg) => {
    var awakeEventObj = {"target": {"name": "awakeTime", "value": timeArg} }
    handleFormChange(awakeEventObj);
  };

  //Method to create Activity and Weight using the WeightService
  const submitInput = () => {

    //Debug display values requested
    console.log('Activity States:', activity)

    //Validation - (BASE CASE): Check if the weight and date is present
    if((activity.sleepDate === '' || activity.sleepDate === null || activity.sleepDate === undefined || isNaN(activity.sleepDate)) || (activity.sleepTime === '' || activity.sleepTime === null || activity.sleepTime == undefined || isNaN(activity.sleepTime)) || (activity.awakeTime === '' || activity.awakeTime === null || activity.awakeTime === undefined || isNaN(activity.awakeTime))){

      var invalidDate = false
      var invalidSleep = false
      var invalidAwake = false

      //If the date has not been input, Display Date Error
      if(activity.sleepDate === '' || activity.sleepDate === null || activity.sleepDate === undefined){
        invalidDate = true
      }else{
        invalidDate = false
      }

      //If the sleep time is incorrect or has not been input, Display Sleep Error
      //Note: Invalid Date is returned by the Time Picker if the time entered is incorrect
      if(activity.sleepTime === '' || activity.sleepTime === null || activity.sleepTime === undefined || isNaN(activity.sleepTime)){
        invalidSleep = true
      }else{
        invalidSleep = false
      }

      //If the awake time is incorrect or has not been input, Display Awake Error
      //Note: Invalid Date is returned by the Time Picker if the time entered is incorrect
      if(activity.awakeTime === '' || activity.awakeTime === null || activity.awakeTime === undefined || isNaN(activity.awakeTime)){
        invalidAwake = true
      }else{
        invalidAwake = false
      }

      //Set react states
      setActivity({ ...activity, 
        invalidDate: invalidDate,
        invalidSleep: invalidSleep,
        invalidAwake: invalidAwake
       });

    }else{
      //Assign values to the spring fields accordingly (the fields that are unused)

      //--- Start Date and Time ---//
      //Merge Date object with the sleep date and the just the sleep time to a DateTime obj
      var ActivityStartDateTime = new Date(activity.sleepDate.getFullYear(), activity.sleepDate.getMonth(), activity.sleepDate.getDay(), activity.sleepTime.getHours(), activity.sleepTime.getMinutes(), activity.sleepTime.getSeconds(), activity.sleepTime.getMilliseconds())

      //Spring requires a format of HR:MIN:SEC for a Time object

      //Get the TimeString elements of this Date object
      var springFormatSleepTime = ActivityStartDateTime.toTimeString();
      //Get the first element from this object (this one is the Date return of the HR:MIN:SEC format)
      springFormatSleepTime = springFormatSleepTime.split(' ')[0];

      //--- End Date and Time ---//
      //Set the next day object with the sleep date and the awake time (the Date will be incremented after this step!!!)
      var ActivityEndDateTime = new Date(activity.sleepDate.getFullYear(), activity.sleepDate.getMonth(), activity.sleepDate.getDay(), activity.awakeTime.getHours(), activity.awakeTime.getMinutes(), activity.awakeTime.getSeconds(), activity.awakeTime.getMilliseconds());

      //The object with the next day set (using the SetDate to meet DST)
      ActivityEndDateTime.setDate(ActivityEndDateTime.getDate() + 1);

      //Spring requires a format of HR:MIN:SEC for a Time object

      //Get the TimeString elements of this Date object
      var springFormatAwakeTime = ActivityEndDateTime.toTimeString();
      //Get the first element from this object (this one is the Date return of the HR:MIN:SEC format)
      springFormatAwakeTime = springFormatAwakeTime.split(' ')[0];

      //--- Sleeping Hours ---//
      //Working out time difference between sleepTime and awakeTime in ms
      var duration = activity.awakeTime.valueOf() - activity.sleepTime.valueOf();

      //Now convert ms to hrs, ms -> secs (1000) -> mins (60) -> hrs (60) and then round to 2dp for easier data management, then using the unary + operator to make from string to double again!
      var sleepingHrs = +(duration/1000/60/60).toFixed(2);

      //Add 24 hours if the calculated duration is negative (it has reached one day)
      if (sleepingHrs < 0) {
        sleepingHrs = 24 + sleepingHrs;
     }

      //Create records in Activity and Weight
      SleepStoreService.createRecord(
        ActivityStartDateTime,
        ActivityEndDateTime,
        activity.moodRating,
        0,
        ActivityStartDateTime,
        springFormatSleepTime,
        springFormatAwakeTime,
        sleepingHrs,
      ).then(() => {
        //Successful Creation
        handleClose()
        //Reload component by routing to a different component and back again
        history.push('/app/dashboard');
        history.push('/app/sleep');
      }).catch((error) => {
        //TODO: Error handling dialog,message,etc.
      })
    }
  }

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.extendedIcon} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sleep Input
            </Typography>
            <Button autoFocus color="inherit" onClick={submitInput}>
              Add Sleep
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <ListItem>
        <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                id="sleepDate"
                name="sleepDate"
                label="Sleep Date"
                format="dd/MM/yyyy"
                value={activity.sleepDate || null}
                onChange={handleDateChange}
                //required
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                error={activity.invalidDate}
                helperText={activity.invalidDate && "Date is required"}
              />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                id="sleepTime"
                name="sleepTime"
                label="Time when you slept"
                value={activity.sleepTime || null}
                onChange={handleSleepChange}
                //required
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                error={activity.invalidSleep}
                helperText={activity.invalidSleep && "Time is required"}
              />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                fullWidth
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                id="awakeTime"
                name="awakeTime"
                label="Time of waking next day"
                value={activity.awakeTime || null}
                onChange={handleAwakeChange}
                //required
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                error={activity.invalidAwake}
                helperText={activity.invalidAwake && "Time is required"}
                />
            </MuiPickersUtilsProvider>
            </ListItem>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography component="legend">How did you feel about this measurement?</Typography>
            <Rating
            name="moodRating"
            size="large"
            value={activity.moodRating || null}
            defaultValue={2}
            getLabelText={(value) => likertIcons[value].label}
            IconContainerComponent={IconContainer}
            onChange={handleFormChange}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}