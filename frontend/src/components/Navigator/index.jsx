import React, { useContext, useState } from "react";

import AppBar from "./AppBar";
import Drawer from "./Drawer";

import { AppStateContext } from "../../contexts/appContext";

const Navigator = () => {
  const { appBarTitle } = useContext(AppStateContext);
  const [open, setOpen] = useState(false); // drawer

  const toggleDrawer = (visible) => setOpen(visible);

  return (
    <>
      <AppBar title={appBarTitle} toggleDrawer={toggleDrawer} />
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigator;