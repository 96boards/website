---
author: sophie-haynes
comments: true
date: 2015-11-03 20:00:21+00:00
layout: post
link: https://www.96boards.org/blog/so-you-have-an-idea-for-a-pcb-development-schematic-netlist/
slug: so-you-have-an-idea-for-a-pcb-development-schematic-netlist
featured_image: pcb-idea-image.png
title: So you have an idea for a PCB? - Development (Schematic)
wordpress_id: 8946
categories:
- blog
tags:
- 96Boards
- DRC
- Eeschema
- Footprints
- Gerber
- KiCad
- Mezzanine
- Netlist
- PCB
- PCB design
- Pcbnew
- Schematic
- Workflow
---

Congratulations! You're starting the second phase of the project.
Now you will be using actual tools from this point onward. There are several tools you can use for developing your board. Personally, I use the the open source software "KiCad" for building PCB's, and will explain how to use this program in the blogs.
So what is a schematic? Basically, it's like the blueprint for your board. All your components should be in here, as well as what they connect to.

##### _Installing KiCad_

_Before we start, you'll need to have KiCad installed. The software can be downloaded from the KiCad website ([here](http://kicad-pcb.org/download/)). Simply click on the appropriate OS and follow the installation instructions. If you are running on OSX, then you should install the most recent unstable release (the “stable” release has a lot of issues, the “unstable” should be more useable)._

### Making Your Own Schematic

KiCad has a schematic tool called _Eeschema_ and this is what we’ll use in this tutorial. Upon opening KiCad for the first time, you will asked to create a new project. Otherwise, KiCad will automatically load the previously opened project.

#### Navigation

Opening the Schematic Tool
Adding Components
Moving Components
Adding Power and Ground
Connecting Components
Adding Labels
Annotating the Schematic
Deleting Items
Assigning Footprints
Additional Notes

Eeschema
{% include image.html name="schematic-netlist-img-1.png" alt="Eeschema"%}

#### Opening the Schematic

To access Eeschema, select the first box in the KiCad welcome screen. This will open up the schematic for your project.

#### Adding Components

Place Component
{% include image.html name="schematic-netlist-img-2.png" alt="Place Component"%}


Adding components to the schematic will be one of the first things you will want to do. On the right hand toolbar is the Place Component button (a red triangle with - + inside). After clicking, you will enter the drawing mode. Your cursor will now be a small pencil. Click anywhere on the page to start adding components. A pop up window will appear allowing you to select which component you want to draw. You can either scroll through the list to find it, or use the search filter. Once you have found and selected your component, click OK then proceed to place it on the page.

#### Moving Components

With the cursor tool selected, click and drag a box over the components you want to move, ensuring they are completely within the confines of the drawn box. Now when you move your cursor, everything you selected will move too. Once you are happy with the placement, click again to secure in place.

Power Icon
{% include image.html name="schematic-netlist-img-3.png" alt="Power Icon"%}

#### Adding Power and Ground

All circuit boards require a source of power and ground. By clicking the Place Power Port icon in the right hand toolbar (a red arrow pointing downward) you can add power and ground the same way as you add components.

#### Connecting Components

Place Wire Icon
{% include image.html name="schematic-netlist-img-4.png" alt="Place Wire Icon"%}


It is important that your components aren’t just floating on the page; they need to be connected to the relevant components (this will help with your PCB layout). Select the Place Wire icon (a diagonal green line). Start the connection by clicking on the small circle on the component, then complete the connection by clicking on the corresponding circle on the other component.





#### Adding Labels

Global Label Icon

{% include image.html name="schematic-netlist-img-5.png" alt="Global Label Icon"%}


Your schematic can become very cluttered and confusing if you have components with lots of signals, and try connecting them directly on the board. A neat solution is to use global labels. This way you Found on the right toolbar, the Place Global Label tool will help you here. After selecting the tool, click anywhere on the page. A pop up box will appear allowing you to enter the text you want inside your label. It also offers you formatting options such as orientation, font style and label type. Once you are happy with your label, click OK and place the label where desired.


Place Text Icon
{% include image.html name="schematic-netlist-img-6.png" alt="Place Text Icon"%}


#### Annotating the Schematic

In order to keep the diagram easy to read, it’s good practice to use the Place Text tool to add some annotation. This tool works the same way as the Global Label tool, click anywhere, type your annotation message, then click to place on the diagram.


Delete Item Icon
{% include image.html name="schematic-netlist-img-7.png" alt="Delete Item Icon"%}


#### Deleting Items


If you need to delete something on your diagram, you have two options. If it’s a single item, you can right click the item, then in the pop up menu, click “Delete…”. If you have several items to delete, select Delete Item tool in the right hand toolbar (the trash can), then click each item to delete.


#### Assigning Footprints


So you’ve managed to add components to your diagram, perfect! Now you need to provide a little more information about them. Let’s use a LED for this example. Your manufacturer may only use a specific type of LED, and not all LED’s are the same shape or size! This is why you must provide the LED in your schematic with a footprint; you will have an accurate representation of the LED in your PCB and the manufacturer will know exactly what you want too.

Dia 2.1: Component Properties window with footprint field selected
{% include image.html name="schematic-netlist-img-8.png" alt="Dia 2.1: Component Properties window with footprint field selected"%}



With your mouse hovering over the component (LED in this case), hit the E key. You will be greeted with the Component Properties window (See Dia 2.1). If you look at the Footprint field, it will likely be empty. We can change this by clicking on the footprint field. Now an Assign Footprint button should appear on the right hand side. Click on it, and the Library Browser will open. This looks a bit scary at first, DON’T PANIC! The library is split into 3 columns; component type, footprints, diagram of selected footprint (Dia 2.2). Go ahead and scroll through the left column and find your component. Once you’ve located it, click it, and now the middle list will be populated with relevant footprints.

Dia 2.2: Library Browser window with an LED footprint selected
{% include image.html name="schematic-netlist-img-9.png" alt="Dia 2.2: Library Browser window with an LED footprint selected"%}

Clicking on once will allow you to see a preview of it in the right column; double clicking will assign your component that footprint. Click OK when you’re returned to the Component Properties window and you’re done!
_If you have imported a custom library, the component footprint will be in that library. If the appropriate footprint is not there, you may need to create your own. See the section on creating footprints._


##### Additional Notes

_*While hovering over an item, you can rotate it easily by hitting the R key_

_*When using Global Labels, avoid using forward slashes when naming things, KiCad doesn’t like it and can cause some errors when you make your netlist_
Once you are happy with your schematic design, you can go ahead and create a Netlist.

[←Schematic](/?p=8941) &#124;[Development: Netlist→ ](/?p=8960)
