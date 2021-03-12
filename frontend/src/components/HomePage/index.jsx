import React, { useContext, useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";

import { AppDispatchContext } from "../../contexts/appContext";
import { setAppBarTitle } from "../../reducers/appReducer";

import "../../App.css";
import globe from "../../assets/images/globe.png";
import plane from "../../assets/images/blue_plane.png";

const useStyles = makeStyles({
  container: {
    height: "100%"
  }
});

const HomePage = () => {
  const appDispatch = useContext(AppDispatchContext);
  const classes = useStyles();

  useEffect(() => {
    appDispatch(setAppBarTitle("Home"));
  }, []);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div id="animation-container">
        <img src={globe} alt="Globe" />
        <img src={plane} alt="Plane" />
      </div>
    </Container>
  );
};

export default HomePage;