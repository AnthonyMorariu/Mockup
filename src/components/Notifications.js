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
    marginTop: 150,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
        marginLeft: 80,
    }
  },
  title: {
    marginLeft: 20,
    marginBottom: 20,
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
  notifInfo: {
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    width: 400,
    minWidth: 200,
  },
  viewBtn: {
    height: 30,
    width: 200,
    minWidth: 50,
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 13,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5">Manager Notificcations</Typography>
      <Grid container>
          <Grid item container direction="row">
            <Grid item xs={12} sm={12} md={7}>
                <Typography className={classes.subtitle} variant="subtitle">Check-ins</Typography>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">S</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> checked in today, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">J</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>John Doe</Box> checked in on 4/12/2020, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">J</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> checked on 4/11/2020, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">A</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> checked in today, view the check-in and respond.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <Typography className={classes.subtitle} variant="subtitle">Overdue Actions</Typography>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">J</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Jane Doe</Box> has an action that is past due.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
                <div className={classes.notif}>
                    <Avatar className={classes.notifImg} alt="Profile Image">A</Avatar>
                    <Typography className={classes.notifInfo} variant="subtitle"><Box fontWeight={700} display='inline'>Sam Smith</Box> has an action that is past due.</Typography>
                    <Button className={classes.viewBtn} variant="contained" color="secondary" disableElevation>view</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <Paper className={classes.paper}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Paper>
                <Paper className={classes.paper}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            </Grid>
            
          </Grid>
      </Grid>
    </div>
  );
}