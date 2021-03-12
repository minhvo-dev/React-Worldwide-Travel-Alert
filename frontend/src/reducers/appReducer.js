export const initialState = {
  appBarTitle: "",
  snackbar: {
    show: false,
    message: "",
    severity: "info"
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_APP_BAR_TITLE":
      return { ...state, appBarTitle: action.payload };
    case "SET_SNACK_BAR":
      return {
        ...state,
        snackbar: {
          show: action.payload.show,
          message: action.payload.message ? action.payload.message : state.snackbar.message,
          severity: action.payload.severity ? action.payload.severity : state.snackbar.severity
        }
      };
    default:
      return state;
  }
};

export const setAppBarTitle = (title) => (
  {
    type: "SET_APP_BAR_TITLE",
    payload: title
  }
);

export const setSnackbar = (show, message, severity) => (
  {
    type: "SET_SNACK_BAR",
    payload: { show, message, severity }
  }
);

export default reducer;