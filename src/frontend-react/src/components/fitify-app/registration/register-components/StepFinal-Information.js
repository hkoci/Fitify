import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

//Dialog libraries
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Login preloader libraries
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//Include React Router history (5.1+ required) - mitigation from nested components
import { useHistory } from "react-router-dom";

import UserRegistration from '../../../../services/register/userCreation';

// Destructure props
const Confirm = ({ handleChange, handleBack, createUser, values }) => {

  let history = useHistory();

  const {
    //User information
    firstName,
    lastName,
    username,
    password,
    email,
    gender,
    date,
    //Marketing variables
    marketingEmail,
    marketingDailyEmailProgress,
    marketingWeeklyEmailProgress,
    marketingRoadmap,
    marketingProgress,
    marketingAchievements,
    //Notification variables
    notificationDaily,
    notificationWeekly,
    notificationMonthly,
    notificationWeight,
    notificationProgress,
    notificationAchievements,
    //Appearance variables
    primaryColour,
    secondaryColour,
    avatarColour,
    darkmode,
    highContrast,
    textSize,
    //Animation
    signupPreloader,
    signupFailed } = values
    

  const getDOB = (DOB) => {
    if(DOB === "" || DOB === null){
      return "None provided"
    }else{
      return DOB.toLocaleDateString()
    }
  };

  const getMarketingBool = (name) => {
    if(name){
      return "Yes"
    }else{
      return "No"
    }
  };

  const setVariable = (name,value) => {
    var StepFormVar = {"target": {"name": name, "value": value} }
    handleChange(StepFormVar);
  };

  const registerSubmit = () => {
    //Start preloader animation
    setVariable("signupPreloader",true)
    
    //Delay by 0.5 seconds to allow time for animations to work
    setTimeout(function() {
      UserRegistration.createUser(
        //User information
        {firstName}.firstName,
        {lastName}.lastName,
        {username}.username,
        {password}.password,
        {email}.email,
        {gender}.gender,
        {date}.date,
        //Marketing variables
        {marketingEmail}.marketingEmail,
        {marketingDailyEmailProgress}.marketingDailyEmailProgress,
        {marketingWeeklyEmailProgress}.marketingWeeklyEmailProgress,
        {marketingRoadmap}.marketingRoadmap,
        {marketingProgress}.marketingProgress,
        {marketingAchievements}.marketingAchievements,
        //Notification variables
        {notificationDaily}.notificationDaily,
        {notificationWeekly}.notificationWeekly,
        {notificationMonthly}.notificationMonthly,
        {notificationWeight}.notificationWeight,
        {notificationProgress}.notificationProgress,
        {notificationAchievements}.notificationAchievements,
        //Appearance variables
        {primaryColour}.primaryColour,
        {secondaryColour}.secondaryColour,
        {avatarColour}.avatarColour,
        {darkmode}.darkmode,
        {highContrast}.highContrast,
        {textSize}.textSize
      ).then(() => {
          //Stop animation
          setVariable("signupPreloader",false)
          //Redirect to dashboard
          history.push('/app/dashboard')
      }).catch(() => {
          //Stop animation
          setVariable("signupPreloader",false)
          //Failed - show dialog
          setVariable("signupFailed",true)
      })
    }.bind(), 500)
  }

  return (
    <Fragment>

      <Backdrop open={signupPreloader} >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Dialog open={signupFailed} onClose={() => setVariable("signupFailed",false)} aria-labelledby="incorrect-credentials" aria-describedby="signup-failure">
        <DialogTitle id="alert-dialog-title">{"Invalid Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            There was a error signing up using your details
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVariable("signupFailed",false)} color="primary" autoFocus>
            Try again
          </Button>
        </DialogActions>
      </Dialog>

      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Gender" secondary={gender} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Date of birth" secondary={getDOB(date)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve marketing emails related to the Fitify project" secondary={getMarketingBool(marketingEmail)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve daily emails regarding my health progress" secondary={getMarketingBool(marketingDailyEmailProgress)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve weekly emails regarding my health progress" secondary={getMarketingBool(marketingWeeklyEmailProgress)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve emails regarding roadmap development plans" secondary={getMarketingBool(marketingRoadmap)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve emails regarding current development progress" secondary={getMarketingBool(marketingProgress)} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="I wish to recieve emails regarding my achievements" secondary={getMarketingBool(marketingAchievements)} />
        </ListItem>

        <Divider />

      </List>

      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={registerSubmit}>
          Confirm & Continue
        </Button>
      </div>



    </Fragment>
  )
}

export default Confirm