import base64
import requests

# OpenAI API Key
api_key = "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"

# Function to encode the image
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Path to your image
image_path = "for vision/faq.png"
# image_path2 = "Screenshot (4).png"
# image_path3 =  "Screenshot (5).png"
# image_path4 =  "Screenshot (6).png"
# image_path5 =   "Screenshot (7).png"
# image_path6 =   "Screenshot (8).png"


# Getting the base64 string
base64_image = encode_image(image_path)
# base64_image2 = encode_image(image_path2)
# base64_image3 = encode_image(image_path3)
# base64_image4 = encode_image(image_path4)
# base64_image5 = encode_image(image_path5)
# base64_image6 = encode_image(image_path6)


headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

payload = {
    "model": "gpt-4-vision-preview",
    "messages": [
      {
        "role": "system",
        "content": "You Are WebGPT. WebGPT is an Advanced AI Web developer. WebGPT specializes in interactive websites that follow the latest digital trends."
      }, 
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": 
                    """
 This is a section of the home page from a website that i am developing for a client. Analyze and then give recommendations on what can/should be changed or improved.
                    """
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/jpeg;base64,{base64_image}"
            }
          },
          
        ]
      }
    ],
    "max_tokens": 4096,
}

response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

print(response.json())