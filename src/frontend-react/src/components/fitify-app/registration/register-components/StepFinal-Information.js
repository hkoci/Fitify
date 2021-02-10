import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

import UserRegistration from '../../../../services/register/userCreation';

// Destructure props
const Confirm = ({ handleNext, handleBack, createUser, values }) => {

  //const { firstName, lastName, email, gender, date, marketingEmail, marketingDailyEmailProgress, marketingWeeklyEmailProgress, marketingRoadmap, marketingProgress, marketingAchievements } = values

  const {         //User information
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

  const handleSubmit = () => {
    // Do whatever with the values
    console.log(values)
    // Show last compinent or success message
    handleNext()
  }

  const getDOB = (DOB) => {
    if(DOB === ""){
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

  function loginSubmit() {
    //Reset message visibility
    //this.setState({ loginPreloader: true })
    //this.setState({ loginSuccess: false })
    //this.setState({ loginFailed: false })
    
    //Delay by 0.5 seconds to allow time for animations to work
    setTimeout(function() {
      UserRegistration.createUser(
        //User information
        {firstName},
        {lastName},
        {username},
        {password},
        {email},
        {gender},
        {date},
        //Marketing variables
        {marketingEmail},
        {marketingDailyEmailProgress},
        {marketingWeeklyEmailProgress},
        {marketingRoadmap},
        {marketingProgress},
        {marketingAchievements},
        //Notification variables
        {notificationDaily},
        {notificationWeekly},
        {notificationMonthly},
        {notificationWeight},
        {notificationProgress},
        {notificationAchievements},
        //Appearance variables
        {primaryColour},
        {secondaryColour},
        {avatarColour},
        {darkmode},
        {highContrast},
        {textSize},
      ).then(() => {
          console.log("good")
          //Change state to Login successful
          //this.setState({ loginPreloader: false })
          //this.setState({ loginSuccess: true })
      }).catch(() => {
          console.log("bad")
          //Change state to Login failed
          //this.setState({ loginPreloader: false })
          //this.setState({ loginFailed: true })
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
        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={loginSubmit}>
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  )
}

export default Confirm
