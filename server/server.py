from flask import Flask
from flask_cors import CORS
import json

from modules.listings import get_listings
from modules.mlnetwork import rate_listings

listings = []

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  print("Request received at /")
  response = { "response": "success" }
  print("Response sent")
  return "" + json.dumps(response) + ""

@app.route("/listings")
def listroute():
  return "" + json.dumps(listings) + ""

if __name__ == "__main__":
  listings = get_listings(20)
  ratings, expected_prices = rate_listings(listings)
  for i in range(len(listings)):
    listings[i]['rating'] = ratings[i]
    listings[i]['expectedPrice'] = expected_prices[i]
  app.run()
