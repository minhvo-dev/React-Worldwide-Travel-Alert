import React, { useContext, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core";

import Controller from "./Controller";
import AlertList from "./AlertList";

import { AppDispatchContext } from "../../contexts/appContext";
import { setAppBarTitle, setSnackbar } from "../../reducers/appReducer";
import { initialState, reducer, setAlerts, setCriterion, setOptions, setSelection } from "../../reducers/advisoryReducer";
import { alertsByRegionQuery, alertsBySubregionQuery, alertsByTravellerQuery, regionsQuery, runGraphQLQuery, subRegionsQuery, travellersQuery } from "../../services/dbService";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});

const advisoriesBy = {
  Traveller: {
    getOptions: async () => {
      const data = await runGraphQLQuery(travellersQuery);
      return data.travellers;
    },
    getAlerts: async (traveller) => {
      const data = await runGraphQLQuery(alertsByTravellerQuery, { traveller });
      return data.alertsByTraveller;
    }
  },
  Region: {
    getOptions: async () => {
      const data = await runGraphQLQuery(regionsQuery);
      return data.regions;
    },
    getAlerts: async (region) => {
      const data = await runGraphQLQuery(alertsByRegionQuery, { region });
      return data.alertsByRegion;
    }
  },
  "Sub Region": {
    getOptions: async () => {
      const data = await runGraphQLQuery(subRegionsQuery);
      return data.subregions;
    },
    getAlerts: async (subregion) => {
      const data = await runGraphQLQuery(alertsBySubregionQuery, { subregion });
      return data.alertsBySubregion;
    }
  }
};

const Advisories = () => {
  const classes = useStyles();
  const appDispatch = useContext(AppDispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { alerts, criterion, selection } = state;

  useEffect(() => {
    dispatch(setCriterion(Object.keys(advisoriesBy)[0]));
    appDispatch(setAppBarTitle("Advisories"));
  }, []);

  useEffect(() => {
    if (criterion) {
      (async () => {
        try {
          const options = await advisoriesBy[criterion].getOptions();
          dispatch(setOptions(options));
          appDispatch(setSnackbar(true, `Found ${options.length} ${criterion.toLowerCase()}${options.length > 1 ? "s" : ""}`, "info"));
        }
        catch (error) {
          dispatch(setOptions([]));
          appDispatch(setSnackbar(true, error.message, "error"));
        }
      })();
    }
  }, [criterion]);

  useEffect(() => {
    if (selection) {
      (async () => {
        try {
          const alerts = await advisoriesBy[criterion].getAlerts(selection);
          dispatch(setAlerts(alerts));
          appDispatch(setSnackbar(true, `Found ${alerts.length} alert${alerts.length > 1 ? "s" : ""} for ${selection}`, "info"));
        }
        catch (error) {
          dispatch(setAlerts([]));
          appDispatch(setSnackbar(true, error.message, "error"));
        }
      })();
    }
  }, [selection]);

  const handleSelectCriterion = (value) => dispatch(setCriterion(value));

  const handleSelectOption = (value) => dispatch(setSelection(value));

  return (
    <div className={classes.root}>
      <Controller
        state={state}
        handleSelectCriterion={handleSelectCriterion}
        handleSelectOption={handleSelectOption}
        criteria={Object.keys(advisoriesBy)}
      />
      <AlertList alerts={alerts} />
    </div>
  );
};

export default Advisories;