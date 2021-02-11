import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
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
const Marketing = ({ handleNext, handleBack, handleChange, values: { marketingEmail, marketingDailyEmailProgress, marketingWeeklyEmailProgress, marketingRoadmap, marketingProgress, marketingAchievements }, formErrors }) => {

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
          <FormGroup col="true">
          <FormLabel component="legend" >You can select your email marketing 📧 preferences below:</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={marketingEmail} onChange={handleCheckedChange} name="marketingEmail" />}
              label="📩 Marketing communications"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={marketingDailyEmailProgress} onChange={handleCheckedChange} name="marketingDailyEmailProgress" />}
              label="📆 Daily health progress"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={marketingWeeklyEmailProgress} onChange={handleCheckedChange} name="marketingWeeklyEmailProgress" />}
              label="📅 Weekly health progress"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={marketingAchievements} onChange={handleCheckedChange} name="marketingAchievements" />}
              label="🏆 Achievements gained"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={marketingRoadmap} onChange={handleCheckedChange} name="marketingRoadmap" />}
              label="🚗 Roadmap development plans"
              className={classes.formControl}
            />
            <FormControlLabel
              control={<Checkbox checked={marketingProgress} onChange={handleCheckedChange} name="marketingProgress" />}
              label="🔧 Current development progress"
              className={classes.formControl}
            />
          </FormGroup>
        </Grid>
                
        <Typography color="inherit" noWrap>
          We promise not to spam! 😀
        </Typography>
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

export default Marketing
