import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import UserStep from "./Step1-UserInfo"
import MarketingStep from "./Step2-Marketing"
import NotificationStep from "./Step3-Notifications"
import AppearanceStep from "./Step4-Appearance"
import ConfirmStep from "./StepFinal-Information"
import formValidation from "./formValidation"

// Step titles
const labels = ["User Information", "Marketing Information", "Notification Settings", "Fitify Appearance", "Information summary"]

const initialValues = {
  //User Information variables
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  gender: "",
  date: "",
  //Marketing variables
  marketingEmail: false,
  marketingDailyEmailProgress: false,
  marketingWeeklyEmailProgress: false,
  marketingRoadmap: false,
  marketingProgress: false,
  marketingAchievements: false,
  //Notification variables
  notificationDaily: false,
  notificationWeekly: false,
  notificationMonthly: false,
  notificationWeight: false,
  notificationProgress: false,
  notificationAchievements: false,
  //Appearance variables
  primaryColour: "#3f51b5",
  secondaryColour: "#f50057",
  avatarColour: "",
  darkmode: false,
  highContrast: false,
  textSize: 0,
  //Register animations
  signupPreloader: false,
  signupFailedUsername: false,
  signupFailed: false
}

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  username: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  password: {
    error: "",
    validate: "password",
    minLength: 2,
    maxLength: 255
  },
  email: {
    error: "",
    validate: "email"
  },
  gender: {},
  date: {},
  marketingEmail: {},
  marketingDailyEmailProgress: {},
  marketingWeeklyEmailProgress: {},
  marketingRoadmap: {},
  marketingProgress: {},
  marketingAchievements: {},
  notificationDaily: {},
  notificationWeekly: {},
  notificationMonthly: {},
  notificationWeight: {},
  notificationProgress: {},
  notificationAchievements: {},
  primaryColour: {},
  secondaryColour: {},
  avatarColour: {},
  darkmode: {},
  highContrast: {},
  textSize: {},
  signupPreloader: {},
  signupFailedUsername: {},
  signupFailed: {}
}


const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  // Proceed to next step
  const handleNext = () => setActiveStep(prev => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep(prev => prev - 1)

  // Handle form change
  const handleChange = e => {
    
    const { name, value } = e.target

    console.log("name", name);
    console.log("val", value)

    if(e instanceof Date){
      name.push();
    }

      // Set values
      setFormValues(prev => ({
        ...prev,
        [name]: value
      }))

      // set errors
      const error = formValidation(name, value, fieldsValidation) || ""

      setFormErrors({
        [name]: error
      })

  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <UserStep handleNext={handleNext} handleChange={handleChange} values={formValues} formErrors={formErrors} />
        )
      case 1:
        return (
          <MarketingStep handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={formValues} formErrors={formErrors} />
        )
      case 2:
        return (
          <NotificationStep handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={formValues} formErrors={formErrors} />
        )
      case 3:
        return (
         <AppearanceStep handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={formValues} formErrors={formErrors} />
        )
      case 4:
        return <ConfirmStep handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={formValues} />
      default:
        break
    }
  }

  return (
    <>
      <Box style={{ margin: "30px 0 50px" }}>
        <Typography variant="h4" align="center">
          Fitify Registration
        </Typography>
        <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
          Get ready to control your health in minutes!
        </Typography>
      </Box>
      <Stepper activeStep={activeStep} style={{ margin: "30px 0 15px" }} alternativeLabel>
        {labels.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {handleSteps(activeStep)}
    </>
  )
}

export default StepForm
