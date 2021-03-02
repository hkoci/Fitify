import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


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
    bottom: theme.spacing(2),
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ------------------------- Marketing States and handlers ------------------------- //

  const [activity, setActivity] = React.useState({
      startDateTime: '',
      endDateTime: '',
      activityType: 'weight',
      moodRating: 0,
      caloriesBurnt: 0,
      weight: 0,
      description: ''
  });

  // Convert 'checked' to 'value' before performing handleChange
  const handleFormChecked = (event) => {
    //Perform changes to the Spring Backend (through Axios Put modifier)
    //MarketingSettings.setMarketingState(event.target.name,event.target.checked);
    //Change internal React state
    handleFormChange(event);
  };

  const handleFormChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.checked });
  };

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
            <Button autoFocus color="inherit" onClick={handleClose}>
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
                id="date"
                label="Date/Time of Weight Measurement"
                format="dd/MM/yyyy"
                value={activity.startDateTime || null}
                onChange={handleClose}
                //required
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem>
              <TextField
              label="Weight"
              id="weight"
              type="number"
              value={activity.weight || ''}
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              fullWidth
            />
          </ListItem>
          <Divider />
          <ListItem>
          <TextField
              label="Description (Optional)"
              id="description"
              value={activity.description || null}
              fullWidth
            />
          </ListItem>
          <ListItem>
            <Typography component="legend">How did you feel about this measurement?</Typography>
            <Rating
            name="mood-likert"
            size="large"
            value={activity.moodRating || 2}
            defaultValue={2}
            getLabelText={(value) => likertIcons[value].label}
            IconContainerComponent={IconContainer}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}