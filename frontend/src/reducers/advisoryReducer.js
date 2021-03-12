const initialState = {
  criterion: "",
  options: [],
  selection: null,
  alerts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CRITERION":
      // reset options, selection, alerts
      return {
        ...state,
        criterion: action.payload,
        options: [],
        selection: null,
        alerts: [],
      };
    case "SET_OPTIONS":
      // reset selection, alerts
      return {
        ...state,
        options: action.payload,
        selection: null,
        alerts: []
      };
    case "SET_SELECTION":
      // reset alerts
      return {
        ...state,
        selection: action.payload,
        alerts: []
      };
    case "SET_ALERTS":
      return {
        ...state,
        alerts: action.payload
      };
    default:
      return state;
  }
};

const setCriterion = (criterion) => (
  {
    type: "SET_CRITERION",
    payload: criterion
  }
);

const setOptions = (options) => (
  {
    type: "SET_OPTIONS",
    payload: options
  }
);

const setSelection = (selection) => (
  {
    type: "SET_SELECTION",
    payload: selection
  }
);

const setAlerts = (alerts) => (
  {
    type: "SET_ALERTS",
    payload: alerts
  }
);

export {
  initialState,
  reducer,
  setCriterion,
  setOptions,
  setSelection,
  setAlerts
};