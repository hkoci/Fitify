import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
  },
}));

// Destructuring props
const Notifications = ({ handleNext, handleBack, handleChange, values: { notificationDaily, notificationWeekly, notificationMonthly, notificationWeight, notificationProgress, notificationAchievements}, formErrors }) => {

  const classes = useStyles();

  // No validation required for checkboxes in this form
  const isValid = true

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedChange = (event) => {
    var dateEventObj = {"target": {"name": event.target.name, "value": event.target.checked} }
    handleChange(dateEventObj);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormGroup col>
          <FormLabel component="legend" >You can select your push notification 🔔 preferences below:</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={notificationDaily} onChange={handleCheckedChange} name="notificationDaily" />}
              label="📆 Daily activity"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={notificationWeekly} onChange={handleCheckedChange} name="notificationWeekly" />}
              label="📅 Weekly activity"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={notificationMonthly} onChange={handleCheckedChange} name="notificationMonthly" />}
              label="⌛ Monthly activity"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={notificationWeight} onChange={handleCheckedChange} name="notificationWeight" />}
              label="🤸🏻 Missed weight recordings"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={notificationProgress} onChange={handleCheckedChange} name="notificationProgress" />}
              label="🤸🏻‍♂️ Fitness progress"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={notificationAchievements} onChange={handleCheckedChange} name="notificationAchievements" />}
              label="🏆 Achievements"
              className={classes.formControl}
            />
          </FormGroup>
        </Grid>
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </>
  )
}

export default Notifications
