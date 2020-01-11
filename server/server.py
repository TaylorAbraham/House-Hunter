from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    print("Request received at /")
    response = { 'response': 'success' }
    print("Response sent")
    return "" + json.dumps(response) + ""

if __name__ == "__main__":
    app.run()
