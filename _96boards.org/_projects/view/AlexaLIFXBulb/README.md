---
page_title:  Integrated Alexa and LIFX Bulb
description: |-
    This project uses the DragonBoard™ 410C Development Board from Arrow Electronics integrated with Alexa Voice Services and LIFX light bulbs using Amazon skills kit. The integration is designed to allow the users to turn on or off the LIFX bulb as well as change the bulb’s color via voice commands (e.g., “Alexa, tell DragonBoard 410c to turn the color to green”).
permalink: "/projects/AlexaLIFXBulb/"
layout: project-display-page
---
# Integrated Alexa and LIFX Bulb

This project uses the DragonBoard™ 410C Development Board from Arrow Electronics integrated with Alexa Voice Services and LIFX light bulbs using Amazon skills kit. The integration is designed to allow the users to turn on or off the LIFX bulb as well as change the bulb’s color via voice commands (e.g., “Alexa, tell DragonBoard 410c to turn the color to green”).

## Objective

Using the DragonBoard 410c, the objective of this project is to get familiar with Amazon’s Alexa voice services, Amazon skills kit, and AWS Lambda Functions.

## Project Details

- **Creator:** Tushar Chugh - Student, Carnegie Mellon University and Former Interim Engineering Intern, Qualcomm Technologies, Inc
- **Project Name:** Integrated Alexa and LIFX Bulb
- **Type of Project:** Demonstration
- **Project Category:** Alexa Voice Service, Embedded, IoT, Smart Home
- **Board(s) used:** [DragonBoard 410c](https://www.96boards.org/product/dragonboard410c/)
- **Difficulty level:** Advanced

## Resources

While instructions might be made available in other formats at a later time, the following RSS URL can be used to guide you through the entire building and software installation process.

### RSS URL

- [View Project on Qualcomm Developer Network](https://developer.qualcomm.com/project/integrated-alexa-and-lifx-bulb)

## Additional Resources

- [LIFX http api](https://api.developer.lifx.com/)
- Creating a deployment package for [AWS lambda function](http://docs.aws.amazon.com/lambda/latest/dg/lambda-python-how-to-create-deployment-package.html)

## Build / Assembly

- [Link to GitHub Repository](https://github.com/TusharChugh/Alexa_Lifx_Dragonboard)
- Setup for LIFX app (not required for the demo but can be useful)
   1. Download LIFX app from the market place
   2. If the bulb is already paired, reset the bulb and then pair it up with your phone
   3. Follow the instructions in the app and complete the setup
   4. Make sure that you have claimed the device
- Get the private token
   1. Register with LIFX as a developer for Beta HTTP API's
   2. Go to [https://cloud.lifx.com/settings](https://cloud.lifx.com/settings) to get your token. If it doesn't work then use the URL from [https://api.developer.lifx.com/docs/authentication](https://api.developer.lifx.com/docs/authentication)
- Clone the code
   1. Go to [https://github.com/TusharChugh/Alexa_Lifx_Dragonboard.git](https://github.com/TusharChugh/Alexa_Lifx_Dragonboard.git)
- Setup AWS Lambda Function
   1. Go to [https://console.aws.amazon.com/lambda/](https://console.aws.amazon.com/lambda/)
   2. Click on 'create a lambda function'
   3. Skip
   4. Configure triggers -> alexa skills kit, next
   5. Give some name and description
   6. Runtime python 2.7
   7. Compress requests-2.11.1.dist-info, requests and dragonboard.py to dragonboard.zip
   8. Code copy entry -> upload a .zip file
   9. Handler: dragonboard.lambda_handler
   10. Create rule (lambda_basic_execution)
   11. Next -> Complete Function
   12. In dragonboard.py paste the token obtained from LIFX
- Setup Alexa skills kit
   1. Go to [https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)
   2. Click on 'create a skill now' (you will need to sign in with your amazon account)
   3. Click on 'add a new skill' button
   4. On skill information tab, give invocation name as 'dragonboard' and a name of your choice
   5. Go to interaction mode tab, first add custom slot type from 'custom_slot_types.txt'
      - e.g: Type: LIST_OF_COLORS Value: red green blue orange pink white yellow violet cyan
   6. Copy the content of intent_schema.json and sample_utterance.txt as is
   7. Go to configuration tab, select Lambda ARN (you can get this ARN on the top of 'Lamda function' which was created in the previous section
   8. Go to test tab: Sample utterance->Enter Utterance->Alexa tell DragonBoard 410c, I am feeling blue
   9. You should see the bulb change the color and the result in Lambda response

## Usage Instructions

[Sample utterances](https://github.com/TusharChugh/Alexa_Lifx_Dragonboard/blob/master/sample_utterance.txt):

- Alexa, tell {App Name} that I am feeling {Color}, where we need to use app name to invoke Alexa.
- Alexa, tell DragonBoard 410c I am feeling blue. (see supported list of colors [here](https://github.com/TusharChugh/Alexa_Lifx_Dragonboard/blob/master/custom_slot_types.txt))
- Alexa, tell DragonBoard 410c to turn on/off.
- Alexa, tell DragonBoard 410c to turn the color to green.

### Social Media Links

- 96Boards: [URL](https://www.96boards.org/) | [Twitter](https://twitter.com/96boards) | [Facebook](https://www.facebook.com/96Boards) | [Linkedin](https://www.linkedin.com/showcase/6637095/)

***
