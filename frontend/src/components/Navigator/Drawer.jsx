import React from "react";
import { Divider, Drawer, IconButton, makeStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

import DrawerList from "./DrawerList";

const useStyles = makeStyles((theme) => ({
  drawerBody: {
    minWidth: 250
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }
}));

const Component = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <div
        className={classes.drawerBody}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <DrawerList />
      </div>
    </Drawer>
  );
};

export default Component;