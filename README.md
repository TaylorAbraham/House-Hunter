![House Hunter screenshot](img/Screenshot.png)
# About
## Inspiration
Finding a place in a new city can be tough. You generally don't know what the average housing for a certain place you want to rent is. This is to help first time renters in the city to be accustomed to the house rentals.

## What is House Hunter?
To provide a solution to this problem, we devised a service that compares rental listings to the average of the housing market. House Hunter provides you with listings in your desired area, as well as ratings of how well priced they are for the features and location they offer.

## How it's built
Estimated prices and ratings are derived through machine learning (linear regression). It analyzes various factors in listings, such as their price, location, number of rooms. In the future this will be expanded to cover other factors, such as appliances & utilities.

The frontend is built with React, and the backend is built with Python 3 + Scikit Learn.

## Competition
This project was created for CUHacking 2020, Carleton University's hackathon. Among 106 other submitted projects and 583 total hackers, House Hunters won the "Best UI/UX" challenge hosted by the hackathon (pictured below).

<img src="img/Winner.jpg" alt="Winning Best UI/UX" width=50%>

# Setup
These installation instructions are made with Ubuntu 16+ in mind. Adjust as necessary
## Client
```
cd client
npm install
npm start
```

## Server
```
cd server
sudo apt install python3 python3-pip python3-venv
python3 -m venv env
source env/bin/activate
pip3 install requests bs4 numpy pandas sklearn flask flask-cors
python3 server.py
```
