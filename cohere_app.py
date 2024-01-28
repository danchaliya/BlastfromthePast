import cohere
from cohere.responses.chat import StreamEvent
co = cohere.Client('rJqbs2D0ift66GeTlL6a3DU4qpUENB5U9NN2zaD6')

# message = "Hello World!"

# response = co.chat(
# 	message, 
# 	model="command", 
# 	temperature=0.9
# )

# answer = response.text

# print(answer)


# response = co.chat(  
# 	message="What is the chemical formula for glucose?",  
# 	connectors=[{"id": "web-search"}]  
# )

# print(response.text)

def cohere_web():
  output = ""
  for event in co.chat("What are the biggest world events of the year 2023?", stream=True, connectors=[{"id": "web-search"}], prompt_truncation="AUTO"):
      if event.event_type == StreamEvent.TEXT_GENERATION:
        print(event.text, end="")
        output += event.text.rstrip("\n")
      # elif event.event_type == StreamEvent.CITATION_GENERATION:
      #    print(event.citations, end="")
      elif event.event_type == StreamEvent.STREAM_END:
        print(event.finish_reason, end="")
        output += event.text.rstrip("\n")
  return output


def cohere_summarize(text):
  response = co.summarize(
      text=text,
      model='command',
      length='medium',
      extractiveness='medium'
  )

  summary = response.summary
  return summary

