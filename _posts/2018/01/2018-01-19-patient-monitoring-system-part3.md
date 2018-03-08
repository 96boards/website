---
title: Part 3 - Patient Monitoring System using 96Boards
author: Manivannan Sadhasivam
date: 2018-01-19 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/patient_monitoring_3.jpg
    name: patient_monitoring.jpg
    thumb: patient_thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---

# **Introduction**

Hello and Welcome to **Part 3** of **Patient Monitoring System using 96Boards**
blog series. In this blog, we are going to see how to visualize the data coming
from BLE mesh network over the cloud for the purpose of remote monitoring and
also triggering the emergency alert using SMS. Before jumping in, here is a quick recap of what happened in previous parts:

1. [Introducing Patient Monitoring System using 96Boards](https://www.96boards.org/blog/patient-monitoring-system-into/) - This
is the introductory blog for the **Patient Monitoring System using 96Boards**
blog series which introduced the project, BLE mesh support in Zephyr
and the project roadmap.

2. [Part 1 - Patient Monitoring System using 96Boards](https://www.96boards.org/blog/patient-monitoring-system-part1/) - This
blog provided the basic usage of BLE mesh in Zephyr by showing the steps
required to provision and configure the nodes and also the data exchange
between Server and Client.

3. [Part 2 - Patient Monitoring System using 96Boards](https://www.96boards.org/blog/patient-monitoring-system-part2/) - This
blog demonstrated the data exchange between BLE mesh network and Gateway
implemented using Dragonboard410c. As a part of this blog, a demonstration
video was also included.

# Cloud Service

The essence of an IoT product is its ability to monitor the behavior remotely.
This can be accomplished with the help of interfacing the IoT device with
a standard Cloud service. In our case, we already have the data generated
from the mesh network. So next step is to send the data to a cloud service
so that it can be visualized from any part of the world.

But the toughest job here is to choose the apt cloud service for our task.
I considered several popular cloud providers like AWS, IBM Bluemix, Microsoft
Azure, Firebase, Thingspeak etc... Most of them were lacking the easy to recreate
tutorials required to use their service like Real-time data visualization,
Notification etc... But there is one cloud provider who has been hanging there
for a long time and used by many hobbyists around the world. It is none other
than the popular IoT platform [Thingspeak](https://thingspeak.com/).

It perfectly suited my use case of visualizing the data coming from the IoT
enabled device and also supported notification trigger using [Twilio](https://www.twilio.com/).
So, I decided to use it for this project.

# Setting Up Thingspeak

Using Thingspeak is very straightforward and easy task. Just create an account
on their website then sign-in and follow the below steps:

1. After Signing in, you will be provided with a window having a button
named **New Channel**. Click it and it will proceed to create a new channel
in Thingspeak.

2. In the next window, provide the following information to create our channel:

* Name: Patient 1
* Description: Dashboard for Patient 1
* Field 1: Temperature
* Field 2: Co2
* Field 3: Emergency Button

Then click, **Save Channel** to save the channel information.

> Note: Note down **Write API Key**, **Read API Key** and **Channel ID** for future use.

3. Now our channel is created and we have declared 3 fields: Temperature, Co2
and Emergency Button. These are the parameters which will be streamed from
the BLE mesh network.

4. Next step is to add visualizations for the created fields. Goto Apps->Plugins.
Click **New**. There will be 3 options for creating the visualization, for this
project we will be using **Google Gauge**. So, select it and click **Create**.

5. In the next window, enter **Name** as **Temperature** and replace the
**Javascript** code with below so that we can create a Google gauge for
Temperature readings:

```javascript
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script type='text/javascript' src='https://www.google.com/jsapi'></script>
<script type='text/javascript'>

  // set your channel id here
  var channel_id = 404689;
  // set your channel's read api key here if necessary
  var api_key = 'A173BFJ51PIY91RZ';
  // name of the gauge
  var gauge_name = 'Temp';

  // global variables
  var chart, charts, data;

  // load the google gauge visualization
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(initChart);

  // display the data
  function displayData(point) {
    data.setValue(0, 0, gauge_name);
    data.setValue(0, 1, point);
    chart.draw(data, options);
  }

  // load the data
  function loadData() {
    // variable for the data point
    var p;

    // get the data from thingspeak
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {

      // get the data point
      p = data.field1;

      // if there is a data point display it
      if (p) {
        displayData(p);
      }

    });
  }

  // initialize the chart
  function initChart() {

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);

    chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    options = {width: 220, height: 220, max: 80, redFrom: 60, redTo: 80, yellowFrom:40, yellowTo: 60, greenFrom: 20, greenTo:40, minorTicks: 10};

    loadData();

    // load new data every 15 seconds
    setInterval('loadData()', 15000);
  }

</script>
```
Then, click **Save**

> Note: Replace **channel_id** and **api_key** with your ID and key.

6. Next, repeat Step 4, 5 to create another gauge for Co2 readings.

7. Enter **Name** as **Co2 Concentration** and paste
the below contents in **Javascipt** code editor.

```javascript
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script type='text/javascript' src='https://www.google.com/jsapi'></script>
<script type='text/javascript'>

  // set your channel id here
  var channel_id = 404689;
  // set your channel's read api key here if necessary
  var api_key = 'A173BFJ51PIY91RZ';
  // name of the gauge
  var gauge_name = 'Co2';

  // global variables
  var chart, charts, data;

  // load the google gauge visualization
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(initChart);

  // display the data
  function displayData(point) {
    data.setValue(0, 0, gauge_name);
    data.setValue(0, 1, point);
    chart.draw(data, options);
  }

  // load the data
  function loadData() {
    // variable for the data point
    var p;

    // get the data from thingspeak
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {

      // get the data point
      p = data.field2;

      // if there is a data point display it
      if (p) {
        displayData(p);
      }

    });
  }

  // initialize the chart
  function initChart() {

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);

    chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    options = {width: 220, height: 220, max: 2000, greenFrom: 500, greenTo:1200, redFrom: 1600, redTo: 2000, yellowFrom:1200, yellowTo: 1750, minorTicks: 10};

    loadData();

    // load new data every 15 seconds
    setInterval('loadData()', 15000);
  }

</script>
```

Then, click **Save**.

> Note: Replace **channel_id** and **api_key** with your ID and key.

8. Now, we have created two Google gauges for displaying the Temperature
and Co2 readings. Next step is to add those to our channel. Goto Channels->My Channels
and select the channel **Patient 1**. In the channel dashboard, click
**Add Visualizations**.

9. Select the following widgets:

* Temperature
* Co2
* Field 1 Chart
* Field 2 Chart

Finally, click **Save**.

Once all of the above mentioned steps are executed successfully we will have 4
widgets appearing on our channel.

Alright, are we ready to start streaming? No, we still need to setup trigger for
the Emergency button :P

# Setting up Emergency Alert

For sending the Emergency Alert, we will be using [Twilio](https://www.twilio.com/).
Create an account there and follow the below steps:

1. Sign-in to the [Twilio Console](https://www.twilio.com/console) and note down
the displayed **ACCOUNT SID** and **AUTH TOKEN** fields.

2. Now, [verify](https://www.twilio.com/console/phone-numbers/verified)
a mobile number for which Twilio can send Emergency alerts.

3. Go to the **Patient 1** dashboard we created on Thingspeak and select Apps->ThingHTTP->New ThingHTTP.

4. Enter the following credentials:

* Name: Patient Monitoring Alert
* URL: https://api.twilio.com/2010-04-01/Accounts/<AccountSid>/Messages.json
* HTTP Auth Username: Paste your Twilio ACCOUNT SID
* HTTP Auth Password: Paste your Twilio AUTH TOKEN
* Method: POST
* Content Type: application/x-www-form-urlencoded
* Body: From=+12x4xx5xxx7&To=+16x3xx4xxx8 &Body=Emergency Alert

> Note: Enter your Twilio number in From= field and destination number in To= field.

Click **Save ThingHTTP**.

5. Next, click Apps->React->New React and enter the below information:

* React Name: Emergency Trigger
* Condition Type: Numeric
* Test Frequency: On Data Insertion
* Condition: Patient 1
             3(Emergency Button)
             is equal to
             1
* Action: ThingHTTP
          Patient Monitoring Alert
* Options: Run action each time condition is met

Click **Save React**.

Now, we are done with all settings needed to visualize the data from mesh network on
cloud and also an Emergency alert when the push button is pressed.

The final step is to send the data from mesh network to cloud through Gateway.

# Sending Data from Gateway

Setup the mesh network and Gateway as shown in the [previous blog](https://www.96boards.org/blog/patient-monitoring-system-part1/)
and install Thingspeak python interface by the following command:

```shell
$ pip install --user thingspeak
```

Now, replace the below script in **pyserial.py**

```python
import serial
import sys
from time import sleep
import urllib2

key = 'Enter your Read key'
baseURL = 'https://api.thingspeak.com/update?api_key=%s' % key

# open serial
ser = serial.Serial('/dev/ttyUSB0', 115200)

while True:
    try:
        # Read serial
        ser_data = ser.readline()
        sen_data = ser_data.split(',')

        # Upload data to thinkspeak
        thing_status = urllib2.urlopen(baseURL + "&field1=%s&field2=%s&field3=%d" % (sen_data[1], sen_data[2], int(sen_data[3])))
        print thing_status.read()
        thing_status.close()

        # Thingspeak only accepts data once every 15 seconds
        sleep(15)

    except KeyboardInterrupt:
        print "Exiting..."
        sys.exit()
```

> Note: Enter your Read API key in **key** variable with single quotes ('').

Once everything is done, execute the python script to start sending data to the cloud.

```shell
$ python pyserial.py
```

# Conclusion

After executing the script, you can see the values in Thingspeak dashboard as below:

{% include image.html name="patient_monitoring_3.jpg" alt="Your alternate text." %}

For triggering an alert, push the button connected to Server node.

So, we are very near to setting a demonstratable **Patient Monitoring System using 96Boards**.
Stay tuned for the next/final blog as we will integrate all of our previous parts together.
