import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  hamburger: {
    marginRight: theme.spacing(2)
  }
}));

const Component = ({ title, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          className={classes.hamburger}
          onClick={() => toggleDrawer(true)}
          color="inherit"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Component;