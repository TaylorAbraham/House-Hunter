import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import StarRating from "./StarRating";

import './HHSectionListings.css';

const useStyles = makeStyles(styles);

const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Nova Scotia", "Nunavut", "Ontario", "Quebec", "Saskatchewan", "Yukon"]

export default function HHSectionListings() {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  const [province, setProvince] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (province === "British Columbia") {
      setIsLoading(true);
      fetch("http://localhost:5000/listings")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setListings(json);
          setIsLoading(false);
        });
    }
  }, [province]);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.brand}>
          <h1 className={classes.title} style={{fontSize:"2.5rem"}}>Let's get started</h1>
          <h3 className={classes.subtitle}>
            Just select your region to begin finding great listings
          </h3>
        </div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            style={{minWidth: "100px"}}
          >
            {provinces.map(p => (
              <MenuItem value={p}>{p}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {
          isLoading ? (<div><CircularProgress /></div>) : listings.length > 0 && (
            <div>
              <div className={classes.title}>
                <h2><b>Listings</b></h2>
              </div>
              <div id="listing1">
                <div className="listings-container">
                  {
                    listings.map(listing => (
                      <div className="listing">
                        <a href={listing.url} target="_blank">
                          <img
                            src={listing.imgURL}
                            width="250"
                            height="250"
                            style={{objectFit: "cover"}}
                          />
                        </a>
                        <div className="listing-details">
                          <div style={{marginTop: "0.5em"}}>
                            <StarRating rating={listing.rating} />
                          </div>
                          <div>
                            {listing.title}
                          </div>
                          <hr />
                          <div>
                            <i>Listed Price: </i><b>{listing.priceStr.substring(0, listing.priceStr.length - 3)}</b> /mo
                          </div>
                          <div>
                            <i>Calculated Price: </i><b>${(parseInt(listing.expectedPrice)) + ''}</b> /mo
                          </div>
                          <hr />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
