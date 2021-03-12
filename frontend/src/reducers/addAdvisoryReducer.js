const initialState = {
  name: "",
  country: null,
  touch: {
    name: false,
    country: false
  },
  alerts: [],
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
        touch: {
          ...state.touch,
          name: true
        }
      };
    case "SET_TOUCH":
      return {
        ...state,
        touch: {
          ...state.touch,
          ...action.payload
        }
      };
    case "SET_ALERTS":
      return {
        ...state,
        alerts: action.payload
      };
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload,
        touch: {
          ...state.touch,
          country: true
        }
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "RESET_STATE":
      return {
        ...initialState, // reset everything
        alerts: state.alerts // keep the alerts
      };
    default:
      return state;
  }
};

const setTravellerName = (name) => (
  {
    type: "SET_NAME",
    payload: name
  }
);

const setTouchOn = (where) => (
  {
    type: "SET_TOUCH",
    payload: where
  }
);

const setAlerts = (alerts) => (
  {
    type: "SET_ALERTS",
    payload: alerts
  }
);

const setCountry = (country) => (
  {
    type: "SET_COUNTRY",
    payload: country
  }
);

const setLoading = (loading) => (
  {
    type: "SET_LOADING",
    payload: loading
  }
);

const resetState = () => (
  {
    type: "RESET_STATE"
  }
);

export {
  initialState,
  reducer,
  setTravellerName,
  setTouchOn,
  setAlerts,
  setCountry,
  setLoading,
  resetState
};