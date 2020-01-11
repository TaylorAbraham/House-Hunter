import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function HHSectionListings() {
  const classes = useStyles();

  return(
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> with icon
              </Button>
              <Button justIcon round color="primary">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
