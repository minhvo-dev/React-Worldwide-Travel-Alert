import React, { useContext, useEffect, useReducer } from "react";
import { Button, Card, CardContent, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";

import { AppDispatchContext } from "../../contexts/appContext";
import { setAppBarTitle, setSnackbar } from "../../reducers/appReducer";
import { initialState, reducer, resetState, setAlerts, setCountry, setLoading, setTouchOn, setTravellerName } from "../../reducers/addAdvisoryReducer";
import { addAdvisoryMutation, alertsQuery, runGraphQLQuery } from "../../services/dbService";
import { countryToFlag, dateToLocaleString } from "../../services/fmtService";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  grid: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1)
  },
  countryCode: {
    width: 50,
    marginRight: theme.spacing(2),
    fontSize: theme.typography.subtitle2
  },
  inputRootError: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main
    }
  },
  inputRoot: {}
}));

const AddAdvisory = () => {
  const classes = useStyles();
  const appDispatch = useContext(AppDispatchContext);
  const [{ name, country, touch, alerts, loading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    appDispatch(setAppBarTitle("Add Advisory"));
    // no caching
    // fetch data everytime that this component mounts
    (async () => {
      try {
        const data = await runGraphQLQuery(alertsQuery);
        dispatch(setAlerts(data.alerts));
        appDispatch(setSnackbar(true, `Found ${data.alerts.length} countries`, "info"));
      }
      catch (error) {
        console.log(error);
        dispatch(setAlerts([]));
        appDispatch(setSnackbar(true, "Error occurred", "error"));
      }
    })();
  }, []);

  const handleTextChange = (event) => {
    dispatch(setTravellerName(event.target.value));
  };

  const handleTouch = (where) => {
    dispatch(setTouchOn(where));
  };

  const handleSelectCountry = (_event, select) => dispatch(setCountry(select));

  const handleAddClick = async () => {
    try {
      dispatch(setLoading(true));
      const data = await runGraphQLQuery(addAdvisoryMutation, {
        travellerName: name,
        countryName: country.name,
        text: country.text,
        date: new Date().toISOString()
      });
      appDispatch(setSnackbar(true, `Added advisory on ${dateToLocaleString(data.addAdvisory.date)}`, "info"));
    }
    catch (error) {
      appDispatch(setSnackbar(true, error.message, "error"));
    }
    finally {
      dispatch(resetState());
    }
  };

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography align="center" variant="h5">Traveller Information</Typography>
        </Paper>
        <Grid
          className={classes.grid}
          container
          spacing={1}
          alignItems="center"
        >
          <Grid item xs={1}>
            <AccountCircleIcon />
          </Grid>
          <Grid item xs={11}>
            <TextField
              label="Name"
              helperText={name || !touch.name ? " " : "Name cannot be empty"}
              value={name}
              onChange={handleTextChange}
              onBlur={() => handleTouch({ name: true })}
              error={!name && touch.name}
              fullWidth
            />
          </Grid>
        </Grid>
        <Autocomplete
          className={touch.country && !country ? classes.inputRootError : classes.inputRoot}
          options={alerts}
          getOptionLabel={alert => alert.name}
          value={country}
          loading={alerts.length === 0}
          onChange={handleSelectCountry}
          onBlur={() => handleTouch({ country: true })}
          renderOption={(option) => (
            <React.Fragment>
              <span className={classes.countryCode}>
                {countryToFlag(option.country)}
              </span>
              {option.name}
            </React.Fragment>
          )}
          fullWidth
          renderInput={params => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
        />
        <Grid
          container
          justify="center"
          className={classes.grid}
        >
          <Button
            variant="contained"
            color="primary"
            component="div"
            disabled={!name || !country || loading}
            onClick={handleAddClick}
          >
            Add
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddAdvisory;