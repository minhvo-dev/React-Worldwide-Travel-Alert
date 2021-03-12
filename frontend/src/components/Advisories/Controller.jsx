import React from "react";
import { Card, CardContent, Grid, makeStyles, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { DoubleArrow as DoubleArrowIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
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
  }
}));

const Controller = ({ state, criteria, handleSelectCriterion, handleSelectOption }) => {
  const classes = useStyles();
  const { criterion, selection, options } = state;

  return (
    <Card className={classes.card} elevation={3}>
      <CardContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography align="center" variant="h5">Advisories</Typography>
        </Paper>
        <Grid
          className={classes.grid}
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={2}>
            <Typography align="center" variant="h6">By</Typography>
          </Grid>
          <Grid item xs={10}>
            <Select
              value={criterion}
              onChange={event => handleSelectCriterion(event.target.value)}
              fullWidth
            >
              {criteria && criteria.map(key => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={2} align="center">
            <DoubleArrowIcon />
          </Grid>
          <Grid item xs={10}>
            <Autocomplete
              options={options}
              value={selection}
              loading={options.length === 0}
              onChange={(_event, value) => handleSelectOption(value)}
              fullWidth
              renderInput={params => (
                <TextField
                  {...params}
                  variant="standard"
                />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Controller;