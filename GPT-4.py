from flask import Flask, jsonify
import base64
import requests

app = Flask(__name__)

# Defining the home page of our site
# @app.route("/")  # this sets the route to this page
# def home():
#     return f"Hello! this is the main page <h1>HELLO</h1> {content}"  # some basic inline html fix


@app.route("/", methods = ['POST'])  # this sets the route to this page
def home():
      # OpenAI API Key
  # api_key = "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"

  # # Function to encode the image
  # def encode_image(image_path):
  #     with open(image_path, "rb") as image_file:
  #         return base64.b64encode(image_file.read()).decode('utf-8')

  # # Path to your image
  # image_path = "/Users/puravgupta/Downloads/IMG_1206.jpeg"

  # # Getting the base64 string
  # base64_image = encode_image(image_path)

  # headers = {
  #     "Content-Type": "application/json",
  #     "Authorization": f"Bearer {api_key}"
  # }

  # payload = {
  #     "model": "gpt-4-vision-preview",
  #     "messages": [
  #         {
  #             "role": "user",
  #             "content": [
  #                 {
  #                     "type": "text",
  #                     "text": "What’s in this image?"
  #                 },
  #                 {
  #                     "type": "image_url",
  #                     "image_url": {
  #                         "url": f"data:image/jpeg;base64,{base64_image}"
  #                     }
  #                 }
  #             ]
  #         }
  #     ],
  #     "max_tokens": 300
  # }

  # response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
  # content = response.json()['choices'][0]['message']['content']

  print("post is working")

  # return f"Hello! this is the main page <h1>HELLO</h1> {content}"
  return "works"


if __name__ == "__main__":
    app.run()