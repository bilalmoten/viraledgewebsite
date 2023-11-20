import base64
import requests

# OpenAI API Key
api_key = "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"

# Function to encode the image
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Path to your image
image_path = "for vision/service box.png"
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
 i am making a website for a digital marketing agency named Viral Edge. currently this is how the services section is bulit, but the client gave feednack that its very plain and simple so i fhave tried to find inspiration on the we and found this image. use the image and help me build it. remember to make it similar to the picture. here is the current code for the services though:
 <section class="services-one pink-back" id="services">
        <div
          class="services-one-bg"
          style="
            background-image: url(assets/images/backgrounds/services-one-bg.jpg);
          "
        ></div>
        <div class="container">
          <div class="section-title text-center" data-aos="fade-down">
            <!-- <span class="section-title__tagline">Our services list</span> -->
            <h2 class="section-title__title" style="color: #ee37b9">
              What we’re offering
            </h2>
          </div>
          <div class="row">
            <!--Service: Storytelling-->
            <div class="col-md-4 col-sm-6" data-aos="fade-right">
              <div class="services-one__single">
                <div class="services-one__icon">
                  <span class="fa-solid fa-user"></span>
                  <!-- Replace with appropriate icon class -->
                </div>
                <h3 class="services-one__title">
                  <a
                    aria-label="link to story telling service page "
                    href="services - storytelling.html"
                    >Storytelling</a
                  >
                </h3>
                <p class="services-one__text">
                  Creating content that entertains, interests, and is useful
                  enough to engage audiences and encourage interaction.
                </p>
                <a
                  href="services - storytelling.html"
                  aria-label="link to story telling service page "
                  class="service-one__arrow"
                >
                  <span class="icon-right-arrow"></span>
                </a>
              </div>
            </div>
            </div>
        </div>
      </section>
                    
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