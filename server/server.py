from flask import Flask
from flask_cors import CORS
import json

from modules.listings import get_listings

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
  app.run()
