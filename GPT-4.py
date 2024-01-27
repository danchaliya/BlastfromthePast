import os
import wandb
from openai import OpenAI

os.environ['OPENAI_API_KEY'] = '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'

client = OpenAI()



response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What’s in this image?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://www.shutterstock.com/image-photo/mature-man-reading-newspaper-smiling-260nw-1939496371.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

print(response.choices[0])
