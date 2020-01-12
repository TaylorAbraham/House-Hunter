import React, { useState, useEffect } from "react";
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
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/listings")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setListings(json);
      });
  }, []);

  console.log("### listings", listings);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Listings</h2>
        </div>
        <div id="listing1" padding={10}>
          <GridContainer justify="center" spacing="5">
            {
              listings.map(listing => (
                <GridItem xs={8} sm={4} md={0}>
                  <img src={listing.imgURL} width="300" height="300"></img>
                  <GridContainer justify="left">
                    <GridItem xs={5} sm={12} md={8}>
                      <b>Insert Address</b>
                    </GridItem>
                    <GridItem xs={5} sm={12} md={8}>
                      {listing.title}
                    </GridItem>
                    <GridItem xs={12} sm={6} md={0}>
                      <b><small>{listing.priceStr}</small></b>
                      <Button color="warning" round>
                        Contact
                    </Button>
                    </GridItem>

                  </GridContainer>
                </GridItem>
              ))
            }
          </GridContainer>
        </div>

      </div>
    </div>
  );
}
