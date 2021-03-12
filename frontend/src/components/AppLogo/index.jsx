import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 250
  }
});

const AppLogo = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
      <Logo className={classes.logo} />
    </Container>
  );
};

export default AppLogo;