---
author: sophie-haynes
comments: true
date: 2015-11-03 20:00:12+00:00
layout: post
link: https://www.96boards.org/blog/so-you-have-an-idea-for-a-pcb-development-pcb/
slug: so-you-have-an-idea-for-a-pcb-development-pcb
featured_image: pcb-idea.png
title: So you have an idea for a PCB? - Development (PCB)
wordpress_id: 8964
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

PCB stands for printed circuit board and in my opinion, is probably the most fun part of the process. This is where your idea finally starts to become a visible thing. But beware; it is incredibly likely that you will need to draw, review, and then start anew several times before you will have a design which you are completely happy with.
_Jump down to Creating the Production Files_

#### Navigation

Opening Pcbnew (the PCB editor)
Importing the Setlist
Moving Components
Board Constraints
Positioning and Connecting Components
Using Vias
DRC
Adding the Ground Plane


Dia 7.1: Basic overview of Pbcnew

{% include image.html name="so-pcb-idea-img-1.png" alt="Dia 7.1: Basic overview of Pbcnew" %}

#### Opening Pcbnew

Returning to the KiCad welcome screen; click on the third icon from the left ("Pcbnew - printed circuit board editor" will appear if you hover your mouse over it).

#### Importing the Netlist

Remember the file that you made earlier in Eeschema? The netlist? Now it's time to use it! This will add all the components from your schematic diagram.
In the upper toolbar, look for the _Read Netlist_ tool (says NET in a green box). The netlist window will pop up. By default, the _Netlist File_ should point to a .net file in your current project folder. If path is incorrect, you can navigate manually by clicking on the browse button and clicking on the netlist file. Once you have the correct netlist selected, click _Read Current Netlist_. Once it’s finished reading the netlist, you should check the _Messages_ box. If there are any errors (such as missing footprints), you should go back and resolve them before continuing. If you’re error free, you can go ahead and close the netlist window. Now, your previously blank screen should now be populated with several components at the bottom of the screen.

#### Moving Components

KiCad has a nice sense of continuity; and so if you’ve followed this tutorial so far, you already know how to move components! To refresh, while hovering your cursor over the component, hit the M key and now the component will follow your cursor. Click again to secure, or hit ESC to undo the move. Hitting R while your cursor is on top of the component will rotate it 90° clockwise.

#### Board Constraints


If you’re designing a board which you want to work with another, the board and certain components will require specific properties. If you were to create a 96board Mezzanine adaptor for example, the board size would NEED to be 85x54mm. Similarly, the 40 pin connector would NEED to be in a specific location, otherwise the board wouldn’t fit properly. You will be able to find the board specs you need for your project online. If you’re lucky, they might also offer base templates too (see future posts!). Otherwise, have a look on github, there might be another project you can strip back and use as a base.

Dia 7.2: Layer selector with Edge.Cuts highlighted

{% include image.html name="so-pcb-idea-img-2.png" alt="Dia 7.2: Layer selector with Edge.Cuts highlighted" %}



If you’re not so lucky to have a template you can use, it’s relatively simple to make your own. For the outline, check the top toolbar and make sure the yellow layer called “Edge.Cuts” is selected (see dia 7.2). Now, select the _Add Graphic Line or Polygon_ tool in the right hand toolbar (looks like a diagonal blue dashed line - see dia 7.3).

Dia 7.3: Add Graphic or Polygon icon

{% include image.html name="so-pcb-idea-img-3.png" alt="Dia 7.3: Add Graphic or Polygon icon" %}


Once selected (you should have a large white cross behind your cursor) you can start drawing the board outline. I recommend drawing one line at a time, hitting ESC to stop drawing, then while your cursor is hovering over the line, hit E. This will bring up _Line Properties_, and you can then input X & Y coordinates for your line, and specify lengths. This will allow you to ensure your board specs are 100% accurate (as long as your math is correct!).

Dia 7.4: Selection pop-up window
{% include image.html name="so-pcb-idea-img-4.png" alt="Dia 7.4: Selection pop-up window" %}

Similarly with your fixed-position components, if you pop them anywhere on the board, then hit E (if you get a little menu pop up like in dia 7.4, click the option that says _Footprint_), it will open _Footprint Properties_ where you can once again input specific coordinates.

#### Positioning and Connecting Components

This step is likely to be one of the most critical, recursive and enjoyable parts of the entire PCB workflow. I like to think of it like a puzzle, that needs a solution!
You may have noticed thin grey lines connecting your components to each other. This is called the _Rats Nest_, and it shows you -according to your schematic- what needs to be connected and to where. This is where you draw your tracks. But before you start drawing connections, there are some things you should know...

  1.  When you draw tracks between your components, they **cannot cross**. If they need to cross, you can use a **via** (this is where the track makes a hole, and drops through to the other side of the board. We’ll look into this more later).

  2. You want to keep your tracks as **short** as possible, and banded together when possible.

  3. Tracks that carry power (aka power rails)** must be thicker** than regular tracks, and it’s best these are kept as a single rail (rather than lots of little power rails being passed through components).

  4. As a general rule, try and keep one layer for horizontal tracks, and the other for vertical tracks. You don’t need to be super strict about this, but it does mean you’ll probably have less issues with crossing tracks later on.

  5. If you’re having trouble with the ground tracks being in the way, don’t draw them. When you add the ground plane, this will connect all the ground pads anyway.

  6. Don’t be afraid to redraw! It’s incredibly unlikely that the first tracks, or even the first draft of tracks you draw will be right. So embrace the redrawing!

  7. **SAVE** your work often! Especially if you are using KiCad on a Mac, it's unstable and it may close unexpectedly.

So, first things first, pop your components on the board. Don’t worry too much about their position for now. Just keep an eye on the rats nest lines; you may notice the lines will not cross if you rotate your components.
Once you’re happy with the placement; go ahead and hit the Add tracks and vias icon (looks like a squiggly green line on the right toolbar). Now the tool is enabled (I’ll refer to this as drawing mode), click on one of the pads (the connector point on the component -this is where the rats nest’s will be linked to). Clicked the pad? Did you notice what happened? The rats nest for this pad has turned yellow!* This makes it even easier to know where to you need to draw your track. Now if you move your cursor, you will see a line being formed behind it, that’s your track! There are two approaches to drawing your tracks:


  1. Clicking the end pad directly, where the tool will automatically will draw a line connecting the two pads, and then leave drawing mode. Sometimes this method is okay, but more often than not, this line will be awkward and you have less control (the tool doesn’t automatically add vias, nor does it like to keep lines straight).


  2. Drawing the track segment by segment. The tool won’t leave drawing mode until you either connect the pads successfully, or hit ESC. This admittedly takes a longer than the first method; but if you want to have a good layout, it’s necessary!


So you’ve drawn your first track? Congratulations! Now you just need to do the rest, chop chop!
_*If there is no yellow line, nor a rats nest from this pad, it’s likely that there is a problem with your netlist, and therefore a problem in your schematic. Double check your labels in Eeschema._

If you draw a track and realise it’s a bit long, or you would like to change the path a little; there’s a nice little feature where you can redraw parts/all of the track. Simply click the track where you aren’t happy (when the Add tracks and vias tool selected) and start drawing the track where you want it to go. When you rejoin the original track, the former track will disappear!

#### Using Vias

So, I assume you aren’t lucky enough to have a layout that has no crossing paths. This is where vias come and save the day. They give you a whole second layer to use for tracks!
As mentioned before, a via is a tiny hole on the board which allows you to switch between layers. If your component is through-hole/dip, you don’t even need to switch back to the top layer to connect to the pad.

To add a via, while in drawing mode tap V and a small white circle will appear under your cursor. This is the via. They need a little more clearance space than tracks so you need to be smart when you place them. When you’re happy with the location of your via, click it in place. Now your track will be on the other side.

#### DRC


You’ve completed your traces, everything is connected, you’re a happy bunny. Nearly. Now you need to run the DRC tool, aka Design Rules Check. If you have unconnected components, traces or vias too close to each other and other similar problems, it will pick up on them and notify you.

To run DRC, look for the icon with a ladybird and a green tick. Click it and the DRC Control window will open. Here you can manually tweak the clearance distances and via sizes; but the defaults should be fine for most projects. Click Start DRC to run the test. If there are any errors, they will appear now in the _Problems/Markers_ tab. Clicking on the _Unconnected_ tab will display any connection problems. If both tabs return blank, that’s a good thing. If there are errors, you can double click on them and the tool will zoom in on the location of the problem, allowing you to fix it.




#### Adding the Ground Plane


In the right hand toolbar, click the _Add Filled Zone_ icon (a green square with a grey circle and line inside). This will enable the drawing mode (indicated by a large white cross behind your cursor). Clicking on the corner of your PCB outline - the yellow outline) will open the _Copper Zone Properties_ window. Select the **F.Cu** layer, ensure _Net_ has **GND** selected, then click OK. Follow the outline, clicking at corners. Once you meet the starting point, all the areas that could have been filled, should be filled (depending on what build you are using, you may need to run DRC first before it fills the area). Repeat this process, instead selecting the **B.Cu** layer.





## Creating the Production Files


Now that you have a layout you are happy to send to production, all you need to do is export this project into the required production files. These consist of Gerbers, drill files, postion files and the Bill of Materials (BOM). Gerbers are in fact a collection of files, one for each layer of your PCB:

1. **T.Silk - Top Silkscreen:** The white prints on your board, usually used for annotating components
2. **T.Paste - Top Solder Paste Stencil:** All the areas on the board where solder paste will be added, which gets heated up in an oven and connects your components to your tracks (_Solder Reflow_)
3. **T.Mask - Top Solder Mask:** Anywhere that isn’t being covered in paste, gets covered in this green film
4. **T.Cu - Top Copper Traces:** All the lovely traces you’ve drawn
5. **All the B… Layers:** Just the same as the T… Layers except they are on the other side of the board

Drill files are where the manufacturer need to drill holes, and the position files tell the pick-and-place machine (which the manufacturer will use) where to place SMD components on the board.

Dia 8.1: Submenu showing the fabrication outputs
{% include image.html name="so-pcb-idea-img-5.png" alt="Dia 8.1: Submenu showing the fabrication outputs" %}


Assuming you still have Pcbnew open, click File > Fabrication Outputs. In the submenu you will see the options for the .pos, .drl and BOM files. Click on each one and save in an appropriate location. I personally recommend popping them all in a new folder together to keep things organised.

Now to make the gerber files. Navigate File > Plot. This should open the Plot window. On the left hand pane, called _Layers_, there will be a long list of checkboxes. You’ll want to make sure the following are checked: **F.Cu, B.Cu, F.Adhes, B.Adhes, F.Paste, B.Paste, F.SilkS,** (if you added silkscreen labels on the bottom layer, you’ll want to tick **B.SilkS** too), **B.Mask, F.Mask & Edge.Cuts**. Also make sure that the _Plot Format_ is **Gerber**. The rest of the defaults should be fine. You can change the _Output Directory_ to the folder you popped the other files in, but it’s not necessary. Once you’re happy with the selections, click _Plot_ and it will produce the gerber files. Now you can close the _Plot_ window and close the project (assuming you have saved!).

And you’re done! Now you can proceed to the manufacturing site and upload the relevant files, and after a week or so, have your PCB in your hand!

In the next series of blogs, I’ll run through the process of submitting a design for manufacture. So stay tuned!

[← Development: Footprints](/blog/8960/)
