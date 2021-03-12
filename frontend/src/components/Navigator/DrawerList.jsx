import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Assignment as AssignmentIcon,
  AddCircle as AddCircleIcon,
  LiveHelp as LiveHelpIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingLeft: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const DrawerList = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem component={Link} to="/home" button key="Home">
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem component={Link} to="/advisories" button key="Advisories">
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText>Advisories</ListItemText>
      </ListItem>
      <List className={classes.nested}>
        <ListItem component={Link} to="/advisories/add" button key="Add Advisory">
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText>Add</ListItemText>
        </ListItem>
      </List>
      <ListItem component={Link} to="/settings" button key="Settings">
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </ListItem>
      <ListItem component={Link} to="/about" button key="About">
        <ListItemIcon><LiveHelpIcon /></ListItemIcon>
        <ListItemText>About</ListItemText>
      </ListItem>
    </List>
  );
};

export default DrawerList;