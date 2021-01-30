//Material-ui, login template
//See https://github.com/mui-org/material-ui/edit/master/docs/src/pages/getting-started/templates/sign-in-side/SignInSide.js
//Licensed with MIT license

//Modified template layout and styling to match Fitify needs
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Authentication from '../../services/login/authentication';
  
//Dialog libraries
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Login preloader libraries
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

  const useStyles = theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?fitness,diet,athletics,cycling,football,tennis,gym,walking,running,hiking,sking,workout,nature)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  });
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="../../">
          Fitify
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  class Login extends Component {

    constructor(props) {
      //Allow states to be referenced by this
      super(props)

      //Set user credentials states
      this.state = {
          username: '',
          password: '',
          loginPreloader: false,
          loginFailed: false,
          loginSuccess: false
      }

      //Bind states to change methods
      this.onUsernameChange = this.onUsernameChange.bind(this)
      this.onPasswordChange = this.onPasswordChange.bind(this)

      //Bind login submit
      this.loginSubmit = this.loginSubmit.bind(this)
    }

    onUsernameChange (event) {
      this.setState({ username : event.target.value});
    }

    onPasswordChange (event) {
      this.setState({ password : event.target.value});
    }

    loginSubmit() {
      //Reset message visibility
      this.setState({ loginPreloader: true })
      this.setState({ loginSuccess: false })
      this.setState({ loginFailed: false })
      
      //Delay by 0.5 seconds to allow time for animations to work
      setTimeout(function() {
        //Attempt JWT Token authentication
        Authentication.getBearerToken(this.state.username, this.state.password).then(() => {
            //Change state to Login successful
            this.setState({ loginPreloader: false })
            this.setState({ loginSuccess: true })
        }).catch(() => {
            //Change state to Login failed
            this.setState({ loginPreloader: false })
            this.setState({ loginFailed: true })
        })
      }.bind(this), 500)
    }

    render(){
      const { classes } = this.props;

      //Check if login was successful
      if (this.state.loginSuccess) {
        //Redirect to dashboard
        this.props.history.push('/app/dashboard')
      }

      return(
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Welcome back!
              </Typography>
              <Typography>Let's get fit once again with Fitify!</Typography>
              <Typography>To use this application, please login with your credentials.</Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={this.state.username}
                  onChange={this.onUsernameChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.loginSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
          <Backdrop className={classes.backdrop} open={this.state.loginPreloader} >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Dialog open={this.state.loginFailed} onClose={() => this.setState({ loginFailed: false })} aria-labelledby="incorrect-credentials" aria-describedby="login-failure">
          <DialogTitle id="alert-dialog-title">{"Incorrect Credentials"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have entered a incorrect username and/or password combination. Please try again, if you do not have a Fitify account - sign up instead.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ loginFailed: false })} color="primary" autoFocus>
              Try again
            </Button>
          </DialogActions>
        </Dialog>
        </Grid>
      );
    }
  }

export default withStyles(useStyles)(Login)