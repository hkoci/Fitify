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
const Confirm = ({ handleNext, handleBack, createUser, values }) => {

  let history = useHistory();

  //Login variables for UI
  var loginPreloader =  false, loginFailed = false

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
    textSize } = values
    

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

  function registerSubmit() {
    //Start preloader animation
    loginPreloader = true
    loginFailed = false
    
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
          loginPreloader = false
          //Redirect to dashboard
          history.push('/app/dashboard')
      }).catch(() => {
          //Stop animation
          loginPreloader = false
          //Failed - show dialog
          loginFailed = true
      })
    }.bind(this), 500)
  }

  return (
    <Fragment>
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

      <Backdrop open={loginPreloader} >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Dialog open={loginFailed} onClose={() => loginFailed = false} aria-labelledby="incorrect-credentials" aria-describedby="login-failure">
          <DialogTitle id="alert-dialog-title">{"Incorrect Credentials"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have entered a incorrect username and/or password combination. Please try again, if you do not have a Fitify account - sign up instead.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => loginFailed = false} color="primary" autoFocus>
              Try again
            </Button>
          </DialogActions>
        </Dialog>

    </Fragment>
  )
}

export default Confirm
