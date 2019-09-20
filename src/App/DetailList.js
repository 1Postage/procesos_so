import React from 'react';
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  Paper,
  ListItemAvatar,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 10
  }
}));

export default function DetailList(props) {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper className={classes.root}>
        <Typography variant="h6">{props.title}</Typography>
        <List>
          {props.list.map((item, idx) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>{item}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={'t=' + Math.floor(Math.random() * 10 + 1)}
                secondary={'a=' + idx * 2}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
}
