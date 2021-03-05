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
  KeyboardDateTimePicker,
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

//WeightService CRUD
import WeightStoreService from '../../../services/activities/weightStore'

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

export default function WeightInput() {
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
      startDateTime: '',
      endDateTime: '',
      activityType: 'weight',
      moodRating: 0,
      caloriesBurnt: 0,
      weight: '',
      description: '',
      invalidDate: false,
      invalidWeight: false}
    );
  };

  // ------------------------- Activity States and handlers ------------------------- //

  const [activity, setActivity] = React.useState({
      startDateTime: '',
      endDateTime: '',
      activityType: 'weight',
      moodRating: 0,
      caloriesBurnt: 0,
      weight: null,
      description: null,
      invalidDate: false,
      invalidWeight: false,
  });

  /*
  // Convert 'checked' to 'value' before performing handleChange
  const handleFormChecked = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    //MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleFormChange(event);
  };*/

  const handleFormChange = (event) => {
    console.log('event',event)
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  //Custom method to handle Date object to be seen as a React SyntheticEvent by using the target object layout
  const handleDateChange = (dateArg) => {
    var dateEventObj = {"target": {"name": "startDateTime", "value": dateArg} }
    handleFormChange(dateEventObj);
  };

  //Method to create Activity and Weight using the WeightService
  const submitInput = () => {

    //Debug display values requested
    console.log('Activity States:', activity)

    //Validation - (BASE CASE): Check if the weight and date is present
    if((activity.weight === null || activity.weight === '' || parseInt(activity.weight) <= 0) || (activity.startDateTime === null || activity.startDateTime === '')){
      //If the weight has not been input
      if(activity.weight === null || activity.weight === '' || parseInt(activity.weight) <= 0){
        //Create Event Target with the invalidWeight state
        var eventObj = {"target": {"name": "invalidWeight", "value": true} }
        //Set state to the event object created
        handleFormChange(eventObj);
      }else{
        var eventValidObj = {"target": {"name": "invalidWeight", "value": false} }
        //Set state to the event object created
        handleFormChange(eventValidObj);
      }

      //If the date has not been input, Display Date Error
      if(activity.startDateTime === null || activity.startDateTime === ''){
        //Create Event Target with the invalidDate state
        var eventDateObj = {"target": {"name": "invalidDate", "value": true} }
        //Set state to the event object created
        handleFormChange(eventDateObj);
      }else{
        var eventDateValidObj = {"target": {"name": "invalidDate", "value": false} }
        //Set state to the event object created
        handleFormChange(eventDateValidObj);
      }
    }else{

      //Create records in Activity and Weight
      WeightStoreService.createRecord(activity.startDateTime,
        activity.endDateTime,
        activity.activityType,
        activity.moodRating,
        activity.caloriesBurnt,
        activity.weight,
        activity.description
      ).then(() => {
        //Successful Creation
        handleClose()
        //Reload component by routing to a different component and back again
        history.push('/app/dashboard');
        history.push('/app/weight');
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
              Weight Input
            </Typography>
            <Button autoFocus color="inherit" onClick={submitInput}>
              Add Weight
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                fullWidth
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                id="startDateTime"
                label="Date/Time of Weight Measurement"
                format="dd/MM/yyyy"
                value={activity.startDateTime || null}
                onChange={handleDateChange}
                //required
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                error={activity.invalidDate}
                helperText={activity.invalidDate && "Date or Date and Time is required"}
                />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem>
              <TextField
              label="Weight"
              id="weight"
              type="number"
              name="weight"
              value={activity.weight || null}
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              onChange={handleFormChange}
              error={activity.invalidWeight}
              helperText={activity.invalidWeight && "Weight is required"}
              fullWidth
            />
          </ListItem>
          <Divider />
          <ListItem>
          <TextField
              label="Description (Optional)"
              name="description"
              id="description"
              value={activity.description || null}
              onChange={handleFormChange}
              fullWidth
            />
          </ListItem>
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