import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 170,
    maxWidth: 1300,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
        marginLeft: 80,
    }
  },
  title: {
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: 600,
  },
  subtitle: {
    marginLeft: 20,
  },
  notif: {
    display: 'flex',
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  notifImg: {
    marginLeft: 10,
    marginTop: 10,
  },
  sideImg: {
    marginTop: 10,
  },
  notifInfo: {
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    fontWeight: 600,
    width: 400,
    minWidth: 200,
  },
  sideInfo: {
    marginTop: 12,
    marginLeft: 10,
    width:400,
    minWidth: 170,
    fontSize: 13,
    fontWeight: 600,
    color: '#000000'
  },
  viewBtn: {
    height: 30,
    width: 200,
    minWidth: 50,
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 13,
  },
  sideHeader: {
    color: '#000000',
    fontWeight: 750,
    marginLeft: 10,
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 10,
    margin: 20,
    boxShadow: "0px 0px 5px 0.2px gray",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5">Manager Notifications</Typography>
      <Grid container>
          <Grid item container direction="row">
            <Grid item xs={12} sm={12} md={7}>
                <Typography className={classes.subtitle} variant="subtitle">Check-ins</Typography>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> checked in today, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/john.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> checked in on 4/12/2020, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> checked on 4/11/2020, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> checked in today, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>

                <Typography className={classes.subtitle} variant="subtitle">Overdue Actions</Typography>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> has an action that is past due.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> has an action that is past due.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>

                <Typography className={classes.subtitle} variant="subtitle">Completed Actions</Typography>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> completed an action, view and rate the action that was completed.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/john.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> completed an action, view and rate the action that was completed.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> completed an action, view and rate the action that was completed.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> completed an action, view and rate the action that was completed.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <Paper className={classes.paper}>
                    <Typography className={classes.sideHeader} variant="h6">Success Engagement's</Typography>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> has not had a success engagment conversation in 5 weeks</Typography>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> had a success engagment conversation today.</Typography>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/john.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> has not had a success engagement converssation in 6 weeks.</Typography>
                    </div>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography className={classes.sideHeader} variant="h6">Shout-outs</Typography>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/sam.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> shouted-out to <Box fontWeight={700} display='inline'>Jane Doe</Box>.</Typography>
                        <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> shouted-out to <Box fontWeight={700} display='inline'>Sam Smith</Box>.</Typography>
                        <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/john.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> shouted-out to <Box fontWeight={700} display='inline'>Jane Doe</Box>.</Typography>
                        <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/jane.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> shouted-out to <Box fontWeight={700} display='inline'>You</Box>.</Typography>
                        <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                    </div>
                    <div className={classes.notif}>
                        <Avatar className={classes.sideImg} alt="Profile Image" src={process.env.PUBLIC_URL + "/john.jpg"}></Avatar>
                        <Typography className={classes.sideInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> shouted-out to <Box fontWeight={700} display='inline'>You</Box>.</Typography>
                        <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                    </div>
                </Paper>
            </Grid>
          </Grid>
      </Grid>
    </div>
  );
}