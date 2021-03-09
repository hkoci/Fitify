//Import React library
import React from 'react';

//Import Material-ui theming 
import { fade, makeStyles } from '@material-ui/core/styles';

//Import Material-ui AppBar libraries 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Import Material-ui menu
import Menu from '@material-ui/core/Menu';

//Import Material-ui search bar
import InputBase from '@material-ui/core/InputBase';

//Import Material-ui icons
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

//Drawer Import
import Drawer from "@material-ui/core/Drawer";

//Drawer List Import
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

//Drawer List Icons Import
import ListItemText from '@material-ui/core/ListItemText';
import { DirectionsRun, FitnessCenter, Group, Home, ListOutlined, NightsStay, Settings } from '@material-ui/icons';

//import {  } from "@material-ui/core/styles";

//Include React Router history (5.1+ required) - mitigation from nested components
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  let history = useHistory();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuSettings = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push('/app/settings');
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //Drawer Props
  const [drawer, setDrawer] = React.useState({
    drawerVisible: false
  });

  //Drawer Visibility methods
  const setDrawerVisible = () => {
    setDrawer({drawerVisible: true});
  };

  const setDrawerHidden = () => {
    setDrawer({drawerVisible: false});
  };

  const userLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const getUsername = () => {
      setTimeout(function() {
          return sessionStorage.getItem("CurrentUsername");
      }, 50);
  }

  //Avatar Colour styling
  //Import color-hash
  var ColorHash = require('color-hash');
  //Instantiate color-hash object
  var colorHashObj = new ColorHash();

  //Set the styling of the avatarColour constant
  const avatarColour = {
    //Set background colour to the hashed (Hash algorithm: String -> Hex) colour value of username
    backgroundColor: colorHashObj.hex(getUsername())
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Avatar style={avatarColour}>{sessionStorage.getItem("FirstName").charAt(0)}</Avatar>
        </ListItemIcon>
        <Typography variant="inherit" display="inline">{sessionStorage.getItem("FirstName")} {sessionStorage.getItem("LastName")}</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="inherit">{sessionStorage.getItem("FitPoints")} FitPoints</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuSettings}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography variant="inherit">Settings</Typography>
      </MenuItem>
      <MenuItem onClick={userLogout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem onClick={userLogout}>
        <IconButton
          aria-label="Logout..."
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToApp />
        </IconButton>
        <p>Log out</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={setDrawerVisible}
            >
            <MenuIcon />
          </IconButton>
          
          <Typography className={classes.title} variant="h6" noWrap>
            {props.title}
          </Typography>

          <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}/>
          </div>

          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawer.drawerVisible}
        onClose={setDrawerHidden}
      >
        <div
          onClick={setDrawerHidden}
          onKeyDown={setDrawerHidden}
        >
          <List className={classes.list}>
            <ListItem button onClick={() => history.push('/app/dashboard')}>

              <ListItemIcon>  
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />

            </ListItem>

            <ListItem button onClick={() => history.push('/app/activities')}>
              
              <ListItemIcon>  
                <ListOutlined />
              </ListItemIcon>
              <ListItemText primary="Activities" />

            </ListItem>

            <ListItem button onClick={() => history.push('/app/social')}>
              
              <ListItemIcon>  
                <Group />
              </ListItemIcon>
              <ListItemText primary="Social" />

            </ListItem>

            <ListItem button onClick={() => history.push('/app/settings')}>
              
              <ListItemIcon>  
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />

            </ListItem>

            <Divider />

            <ListItem button onClick={() => history.push('/app/weight')}>
              
              <ListItemIcon>  
                <FitnessCenter />
              </ListItemIcon>
              <ListItemText primary="Weight" />

            </ListItem>

            <ListItem button>
              
              <ListItemIcon>  
                <DirectionsRun />
              </ListItemIcon>
              <ListItemText primary="Physical Movement" />

            </ListItem>

            <ListItem button onClick={() => history.push('/app/sleep')}>
              
              <ListItemIcon>  
                <NightsStay />
              </ListItemIcon>
              <ListItemText primary="Sleep" />

            </ListItem>
          </List>
        </div>
      </Drawer>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}