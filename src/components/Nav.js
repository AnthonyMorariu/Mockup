import React from 'react';
import effect from '../effect.png';
import stars from '../stars.PNG';

//MUI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//Icons
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  notifAction: {
    color: '#ca0a37'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 100,
    boxShadow: 'none',
  },
  button: {
      display: 'flex',
      maxWidth: 65,
      flexWrap: 'wrap'
  },
  botNav: {
    backgroundColor: '#f6f6f6',
    boxShadow: "4px 4px 10px 2px gray",
    width: "100%",
    position: 'fixed',
    bottom: 0,
  },
  icons: {
    posittion: 'absolute',
    marginLeft: 20,
  },
  iconlabel: {
    fontSize: 8,
    width: 65,
    textAlign: 'center',
    fontWeight: 650
  },
  notifIconlabel: {
    fontSize: 8,
    width: 65,
    textAlign: 'center',
    fontWeight: 650,
    color: '#ca0a37'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    height: 100,
    display: 'relative',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  effect: {
    marginTop: 100,
    paddingLeft: 20,
    width: '100%',
    position: 'absolute',
    right: 0,
  },
  logo: {
      width: 35,
      position: 'absolute',
      paddingBottom: 40,
      left: 15,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  notif: {
    color: '#ca0a37',
    posittion: 'absolute',
    marginLeft: 20,
  },
  navImg: {
    marginBottom: 22,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    fontWeight: 100,
  },
  stars: {
    marginLeft: 40,
    marginTop: 5,
    height: 15,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden only="xs">
            <img className={classes.logo} src={process.env.PUBLIC_URL + "/logo.png"} />
          </Hidden>
          <div  className={classes.container}>
            <Typography className={classes.greeting} variant="body1" >Hello Jane, Happy Birthday!</Typography>
            <img className={classes.stars} src={stars} alt="stars"/>
          </div>
          <Avatar className={classes.navImg} alt="Profile Image">A</Avatar>
        </Toolbar>
      </AppBar>
      <img className={classes.effect} src={effect} alt="3d effect"/>
      <Hidden only='xs'>
        <Drawer
            variant="permanent"
            className={classes.drawer}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <List>
                <ListItem className={classes.button} button>
                    <ListItemIcon className={classes.icons}><TrendingUpSharpIcon /></ListItemIcon>
                    <Typography variant="caption" className={classes.iconlabel}>Dashboard</Typography>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className={classes.button} button>
                    <ListItemIcon className={classes.icons}><FormatListBulletedSharpIcon /></ListItemIcon>
                    <Typography variant="caption" className={classes.iconlabel}>Actions</Typography>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className={classes.button} button>
                    <ListItemIcon className={classes.icons}><CheckCircleOutlineSharpIcon /></ListItemIcon>
                    <Typography variant="caption" className={classes.iconlabel}>Check-in</Typography>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className={classes.button} button>
                    <ListItemIcon className={classes.icons}><PeopleAltRoundedIcon /></ListItemIcon>
                    <Typography variant="caption" className={classes.iconlabel}>Directory</Typography>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className={classes.button} button>
                    <ListItemIcon className={classes.notif}><Badge badgeContent={10} color="primary"><NotificationImportantOutlinedIcon /></Badge></ListItemIcon>
                    <Typography variant="caption" className={classes.notifIconlabel}>Notifications</Typography>          
                </ListItem>
            </List>
            <Divider/>
        </Drawer>
      </Hidden>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <BottomNavigation showLabels boxShadow={3} className={classes.botNav}>
            <BottomNavigationAction className={classes.actions} label="Dashboard" icon={<TrendingUpSharpIcon />} />
            <Divider orientation="vertical" flexItem />
            <BottomNavigationAction className={classes.actions} label="Actions" icon={<FormatListBulletedSharpIcon />} />
            <Divider orientation="vertical" flexItem />
            <BottomNavigationAction className={classes.actions} label="Check-in" icon={<CheckCircleOutlineSharpIcon />} />
            <Divider orientation="vertical" flexItem />
            <BottomNavigationAction className={classes.actions} label="Directory" icon={<PeopleAltRoundedIcon />} />
            <Divider orientation="vertical" flexItem />
            <BottomNavigationAction className={classes.notifAction} label="Notifications" icon={<Badge badgeContent={6} color="primary"><NotificationImportantOutlinedIcon /></Badge>} />
        </BottomNavigation>
       </Hidden>
    </div>
  );
}
