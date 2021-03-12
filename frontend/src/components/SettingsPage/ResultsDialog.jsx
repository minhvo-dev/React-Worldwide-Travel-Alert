import React from "react";
import { Dialog, DialogTitle, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    minWidth: 250
  },
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  dialogPaper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

const ResultsDialog = ({ results, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={Boolean(results)}
      onClose={onClose}
    >
      <DialogTitle className={classes.dialogTitle}>Results</DialogTitle>
      {results && results.map(result =>
        <Paper key={result} className={classes.dialogPaper}>
          <Typography className={classes.text} variant="body2">{result}</Typography>
        </Paper>
      )}
    </Dialog>
  );
};

export default ResultsDialog;