

from flask import Flask, render_template
from flask_cors import CORS, cross_origin
import GPT
import datetime


print(datetime.datetime.now())

app = Flask(__name__)

# CORS(app, support_credentials=True)

# Defining the home page of our site
@app.route("/")  # this sets the route to this page

def home():
    return render_template('index.html')

# Defining another page to route to GPT-4
@app.route("/create/", methods = ['POST'])  # this sets the route to this page
    
def gpt4():
    # content = GPT.gpt4("/Users/puravgupta/Downloads/IMG_1206.jpeg")
    print("it is working now")
    return render_template('index.html');



if __name__ == "__main__":
    # app.run(debug=True, host='0.0.0.0', port=7473)
    app.run(debug=True)