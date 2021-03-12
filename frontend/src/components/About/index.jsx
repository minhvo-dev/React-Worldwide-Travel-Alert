import React, { useContext, useEffect } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";

import { AppDispatchContext } from "../../contexts/appContext";
import { setAppBarTitle } from "../../reducers/appReducer";

const About = () => {
  const appDispatch = useContext(AppDispatchContext);

  useEffect(() => {
    appDispatch(setAppBarTitle("About"));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography>
          <strong>Worldwide Travel Alert</strong> is
          a <em>mobile-friendly</em> web application
          that helps users look up for advisories
          before travelling to other countries.
        </Typography>
        <Typography>
          <strong>Worldwide Travel Alert</strong> is
          the case study of <em>INFO-3139</em> course at Fanshawe College.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://github.com/minhvo-dev/Worldwide-Travel-Alert"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default About;