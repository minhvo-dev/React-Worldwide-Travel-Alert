import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import { dateToLocaleStringArray } from "../../services/fmtService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2, 0)
  },
  grid: {
    width: "100%",
    alignItems: "center"
  },
  heading: {
    fontSize: theme.typography.pxToRem(14)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary
  },
  textDetails: {
    fontSize: theme.typography.pxToRem(14),
    fontStyle: "italic"
  },
  evenListItem: {
    backgroundColor: theme.palette.primary.light
  },
  oddListItem: {

  }
}));

const AlertList = ({ alerts }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {alerts.map(({ name, text, date }, index) => (
        <Accordion
          expanded={expanded === name}
          onChange={handleChange(name)}
          key={name}
          elevation={1}
          className={index % 2 ? classes.oddListItem : classes.evenListItem}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container className={classes.grid}>
              <Grid item xs={8}>
                <Typography className={classes.heading}>{name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Grid container align="center">
                  {date && dateToLocaleStringArray(date).map((str, index) => (
                    <Grid item xs={12} key={index}>
                      <Typography className={classes.secondaryHeading}>{str}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.textDetails}>{text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AlertList;