import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

//Material-Ui Pickers
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// Destructuring props
const UserInfo = ({ handleNext, handleChange, values: { firstName, lastName, username, password, date, email, gender }, formErrors }) => {

  // Check if all values are not empty or if there are some error
  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    username.length > 0 &&
    !formErrors.username &&
    password.length > 0 &&
    !formErrors.password &&
    //date.length > 0 &&
    email.length > 0 &&
    !formErrors.email &&
    gender.length > 0

    //Custom method to handle Date object to be seen as a React SyntheticEvent by using the target object layout
    const handleDateChange = (dateArg) => {
      var dateEventObj = {"target": {"name": "date", "value": dateArg} }
      handleChange(dateEventObj);
    };

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            margin="normal"
            value={firstName || ""}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            placeholder="Your username"
            type="username"
            value={username || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.username}
            helperText={formErrors.username}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            placeholder="Your password"
            type="password"
            value={password || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.password}
            helperText={formErrors.password}
            required
          />
        </Grid>

        <Grid item xs={12}>
          
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              id="date"
              label="Date of birth"
              format="dd/MM/yyyy"
              value={date || null}
              onChange={handleDateChange}
              //required
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleChange} name="gender">
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Non-binary"}>Non-binary</MenuItem>
              <MenuItem value={"Transgender"}>Transgender</MenuItem>
              <MenuItem value={"Intersex"}>Intersex</MenuItem>
              <MenuItem value={"NA"}>I Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default UserInfo
