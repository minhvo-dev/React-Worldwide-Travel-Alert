import React, { useContext } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { AppDispatchContext, AppStateContext } from "../../contexts/appContext";
import { setSnackbar } from "../../reducers/appReducer";

const Notificator = () => {
  const { snackbar } = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);

  return (
    <Snackbar
      open={snackbar.show}
      autoHideDuration={4000}
      onClose={() => dispatch(setSnackbar(false))}
    >
      <Alert
        onClose={() => dispatch(setSnackbar(false))}
        severity={snackbar.severity}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default Notificator;