import React, { useReducer } from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";

import Navigator from "./components/Navigator";
import AppLogo from "./components/AppLogo";
import Notificator from "./components/Notificator";
import HomePage from "./components/HomePage";
import SettingsPage from "./components/SettingsPage";
import AddAdvisory from "./components/AddAdvisory";
import Advisories from "./components/Advisories";
import About from "./components/About";

import { AppDispatchContext, AppStateContext } from "./contexts/appContext";
import reducer, { initialState } from "./reducers/appReducer";

import theme from "./theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "100%",
    maxWidth: 640
  }
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <MuiThemeProvider theme={theme}>
          <Navigator />
          <AppLogo />
          <Notificator />
          <div className={classes.root}>
            <div className={classes.container}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route exact path="/home" render={() => <HomePage />} />
                <Route exact path="/settings" render={() => <SettingsPage />} />
                <Route exact path="/advisories/add" render={() => <AddAdvisory />} />
                <Route exact path="/advisories" render={() => <Advisories />} />
                <Route exact path="/about" render={() => <About />} />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export default App;