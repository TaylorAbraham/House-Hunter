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

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Listings</h2>
        </div>
        <div id="listing1" padding = {10}>
          <GridContainer justify="center" spacing="5">
            <GridItem xs={6} sm={3} md={0}>
              <GridContainer justify="left">
                <img src={require("assets/img/house.jpeg")} width="300" height="300"></img>
                <GridItem xs={5} sm={12} md={8}>
                  <b>123 Fake Street</b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  Description of the property...
              </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <b><small>$500/month</small></b>
                </GridItem>
              
                  <b><small>TAG • TAG • TAG</small></b>
                
                  <Button color="warning" round>
                    Contact
                  </Button>
                
              </GridContainer>
            </GridItem>
            <GridItem xs={6} sm={3} md={0}>
              <GridContainer justify="left">
                <img src={require("assets/img/house.jpeg")} width="300" height="300"></img>
                <GridItem xs={5} sm={12} md={8}>
                  <b>456 Fake Street</b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  Description of the property...
              </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <b><small>$600/month</small></b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <b><small>TAG • TAG • TAG</small></b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <Button color="warning" round>
                    Contact
                </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={6} sm={3} md={0}>
              <GridContainer justify="left">
                <img src={require("assets/img/house.jpeg")} width="300" height="300"></img>
                <GridItem xs={5} sm={12} md={8}>
                  <b>789 Fake Street</b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  Description of the property...
              </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <b><small>$600/month</small></b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <b><small>TAG • TAG • TAG</small></b>
                </GridItem>
                <GridItem xs={5} sm={12} md={8}>
                  <Button color="warning" round>
                    Contact
                </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>

      </div>

    </div>
  );
}
