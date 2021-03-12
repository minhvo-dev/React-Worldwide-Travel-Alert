import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import ResultsDialog from "./ResultsDialog";

import { AppDispatchContext } from "../../contexts/appContext";
import { setAppBarTitle, setSnackbar } from "../../reducers/appReducer";
import { setupAlertsQuery, runGraphQLQuery } from "../../services/dbService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  button: {
    margin: "auto"
  }
}));

const SettingsPage = () => {
  const appDispatch = useContext(AppDispatchContext);
  const classes = useStyles();
  const [results, setResults] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    appDispatch(setAppBarTitle("Settings"));
  }, []);

  const handleResetClick = async () => {
    try {
      setDisabled(true);
      appDispatch(setSnackbar(true, "Resetting alerts", "info"));
      const data = await runGraphQLQuery(setupAlertsQuery);
      appDispatch(setSnackbar(true, "Reset alerts successfully", "success"));
      setResults(data.setupAlerts);
    }
    catch (error) {
      console.log(error);
      appDispatch(setSnackbar(true, "Errors occurred", "error"));
      setResults([error.message]);
    }
    finally {
      setDisabled(false);
    }
  };

  const handleDialogClose = () => {
    setResults(null);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h4">Options</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleResetClick}
              className={classes.button}
              disabled={disabled}
            >
              Reset alerts
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ResultsDialog results={results} onClose={handleDialogClose} />
    </Container>
  );
};

export default SettingsPage;