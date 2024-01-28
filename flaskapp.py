

from flask import Flask, render_template
from flask_cors import CORS, cross_origin
import GPT
import datetime

# content = GPT.gpt4("/Users/puravgupta/Downloads/IMG_1206.jpeg")
print(datetime.datetime.now())

app = Flask(__name__)

# CORS(app, support_credentials=True)

# Defining the home page of our site
@app.route("/", methods = ['POST','GET'])  # this sets the route to this page

def home():
    return render_template('index.html')


if __name__ == "__main__":
    # app.run(debug=True, host='0.0.0.0', port=7473)
    app.run(debug=True)