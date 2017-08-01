---
author: davidm
comments: true
date: 2015-11-25 14:24:49+00:00
layout: post
link: https//www.96boards.org/blog/3d-printable-ce-cases/
slug: 3d-printable-ce-cases
featured_image: 96Boards-3D-printable-CE-cases.png
title: 96Boards 3D printable CE cases
wordpress_id: 9804
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
tags:
- 64-bit
- Android
- ARM
- ARMv8
- Consumer IoT
- DragonBoard 410c
- HiKey
- Linux
- Open Embedded
- OpenSCAD
---

I almost let the [magic white smoke](https://en.wikipedia.org/wiki/Magic_smoke) out of one of my DragonBoard 410c’s a few weeks ago. I don’t know if you’ve ever done that but it’s not nice, you can’t put it back in, it stinks up the place and the board quits working without it. 😎 I had the board powered up and was working on the hardware demo that I was crafting and it started to slide off the piece of cardboard onto a tabletop covered in junk, resistors, caps, jumper wires all bare, misc screws. A perfect environment to short a bare board out. I caught the board before it slid all the way off, but it was too close a call. Time for a case of some sort, but there are no custom cases for 96Boards yet. I do own two 3D Printers but I’m terrible at using drafting programs; I’m just not an artist and laying out an accurate case in something like Trimble sketchup, while possible, is really difficult for me. Then I started thinking about a conversation I’d had over beer after a hackathon I attended. A business acquaintance, I’ll call him LK, and I were talking about some design work he had done with OpenSCAD. He had created several cases for boards that all resided in a single source file, no drafting or sketching involved. LK said it was pretty easy (if you are a programmer), you use dimensions to draw cubes, cylinders, boxes, etc, and you can move them around (translate their position). There are variables, if statements, for loops, things a programmer should be comfortable with: [OpenSCAD](http://www.openscad.org/). Now I’d heard of OpenSCAD before and it was on the list of things I want to try, but I’d not had the time to get around to it.

Given that I’d nearly blown out a board that was in very limited supply, perhaps it was time to get around to it. OpenSCAD is really nice, it’s open source, written in C++, and supports Linux, MacOS and Microsoft Windows. Perfect, I installed the latest version and grabbed the [docs](http://www.openscad.org/documentation.html) and an [ebook](http://www.amazon.com/OpenSCAD-3D-Printing-Al-Williams-ebook/dp/B00I6K19OM/ref=sr_1_1?ie=UTF8&qid=1448062599&sr=8-1&keywords=OpenSCAD+ebook) that I found on Amazon and started reading. LK was right, this felt rather C like, I mean it’s clearly not C, but it feels familiar none the less. Some more reading and I discovered that variables are not variables as I think of them, they are more like [C preprocessor define statements](https://en.wikipedia.org/wiki/C_preprocessor), they get set at compile time not runtime so you can’t do runtime math into a variable, except in very limited situations, there is this thing called a module statement, that looks and feels like a C/C++ function call. All in all it feels very comfortable. Time to start.

First I grab the [96Boards CE specification document](https://www.96boards.org/specifications/) and input all of the dimensions of a CE board, how long, wide (two different sizes, regular and extended, input both), thick. The size of the connectors, some of that I had to actually measure the real devices on my board, I could have used data sheets but I have a digital micrometer and a board, what is better than empirical measurements? With that and a few hours I laid out a board. One thing I had read about was difference call, it’s how you create a hollow cube, make a small cube, put it inside a bigger cube and subtract the small cube from the big one and you have a hollow cube. So to make a case that has holes in it I have to make the connectors stick out. That is easy, make them longer and plunk them down where they belong. See the graphic below:

[![BareBoardTop]({% asset_path "3d-cases-img-1.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-1.png){:class="img-responsive lazyload"}

OK, that looks like the layout of a 96Board, 2 USBs, a MicroUSB, an HDMI, a micro-SD card, a power connector and both the low speed and high speed connectors in place on top of a board. Brute force, nothing fancy in the code at this point just get it working.

Next we need mounting holes, and the dimensional space the board is allowed to take up 7mm above the board, 3.4mm below the board, 1.6mm board thickness which comes to 12mm total and then add the tolerance allowed of .25mm in all directions.

[![BareBlockTop]({% asset_path "3d-cases-img-2.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-2.png){:class="img-responsive lazyload"}

You know the best part? I still haven't drawn anything, it’s all numbers. LK was right I CAN DO THIS :-) The screw holes are a series of cylinders, the tapered top for a counter sunk screw is a cylinder with the top and bottom different sizes. For me this is SOOOOO much easier then trying to use some sort of a drafting program. I just don’t have that skill set at all.

Time for an initial box, so some more brute force and we get a hollow case for a 96Boards hardware to fit in. Up until now I’ve been adding parts to other parts, now I’m about to use that difference engine. Make a bigger cube and diff my smaller cube. Not bad, I got:

[![SimpleBox]({% asset_path "3d-cases-img-3.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-3.png){:class="img-responsive lazyload"}

[![SimpleBox1]({% asset_path "3d-cases-img-4.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-4.png){:class="img-responsive lazyload"}

As you can see, all the connector holes are there, you can see right through the box and out the back power connector hole. Now I’m excited, I have a box, but there is still a problem, I can’t print this out and use it, there is no way to get the board into it. OK, so I have to cut this into 2 halfs, one top and one bottom.

This is now getting messy. I literally started from the top of the file and just flowed in color, cube, cylinder and translate commands to arrive at the box. Now I needed to write code to cut it in half and then export STL files so I can print it. And I needed to first cut the bottom and export an STL file and then go back and cut the top and do it again and export an STL for that. And I don’t need both the low speed and high speed connectors exposed right now, only the low speed. And, and, and, and….it’s clear it’s time to clean up the code make modules out of it, use if statements to control what shows and what does not. And while I’m at it I have a new UART board that breaks out the boot serial console, it would be nice to be able to print a box for that too. I also added the ability to make a case for the extended CE board, though there are not any of those yet.

I’ll admit I did brute force slicing up the box and outputting STL files and I printed out a bottom of a case and it fit first time, nice and snug. I did not even have to use any bolts or screws, nice tight friction fit. (That should have alerted me that there was an issue but I missed the hint, more on this later.)

Time to refactor the code, add a bunch of true/false variables that I can check to see what should be generated and what can be skipped in this run. Make some modules, I don’t need 100 translate calls, followed by color calls, followed by cube calls all applying the same calculations, I need a module call that combines all of that, make it as easy as possible to understand what the intent is and to debug the code later (there will always be bugs you can take that to the bank, ask any programmer). A couple of days later I end up with code that looks like this:

```cpp

    // How thick do you want your case walls(in mm)
    // Be careful if you are setting rounded_case true, too thin of walls will leave holes
    // Don't go to thick (much over 2.5) or you will have problems plugging in cables
    case_wall_thickness = 2.5;

    // Extended board or regular true/false question
    96Boards_CE_extended_version = false;

    // Do you have a UART board and want room to install it in the case?
    96Board_UART_Board_Installed = false;

    // The UART board has a reset button, if you want to be able to press it true
    expose_UART_Board_Button = true;

    // expose the low/high speed connectors or not true/false question
    expose_low_speed_connector = true;
    expose_high_speed_connector = true;
    expose_DragonBoardDipSwitch = true;

    // For exporting .stl models, this will cut the model in 1/2 at the board top level.
    // The board will fit into the bottom of the case cleanly and the top will sit on it
    slice = false;

    // top of the box or bottom
    slice_top = true;

```

And further down in the code it looks like this:

```cpp

    // DC_pwr_Connector
    color ( "lightgreen" )
    face_penetration ( "BA" , DC_pwr_offset , board_back_edge , board_top_surface , DC_pwr_length , DC_pwr_width ,DC_pwr_thickness , false ) ;

    //Low_Speed_Connector
    if ( expose_low_speed_connector == true ) {
    color ( "Indigo" )
    face_penetration ( "TO" , low_speed_connector_left_offset , low_speed_connector_center_offset - (low_speed_connector_width / 2 ) , board_top_surface , low_speed_connector_length , low_speed_connector_width ,bd_top_clearance , false ) ;
    }

    // High_Speed_Connector
    if ( expose_high_speed_connector == true ) {
    color ( "Indigo" )
    face_penetration ( "TO" , high_speed_connector_left_offset , high_speed_connector_center_offset - (high_speed_connector_width / 2 ) , board_top_surface , high_speed_connector_length , high_speed_connector_width, bd_top_clearance , false ) ;
    }

    // DragonBoardDipSwitch
    if ( expose_DragonBoardDipSwitch == true ) {
    color ( "Fuchsia" )
    face_penetration ( "BO" , DragonBoardDipSwitch_offset , DragonBoardDipSwitch_y_offset ,DragonBoardDipSwitch_z_offset , DragonBoardDipSwitch_length , DragonBoardDipSwitch_width , bd_bottom_clearance, false ) ; //-3.25
    }

    //UART_Board_Connector
    if ( 96Board_UART_Board_Installed == true && 96Boards_CE_extended_version == false ) {
    color ( "DarkOliveGreen" )
    face_penetration ( "BA" , uart_board_connector_offset , board_back_edge , uart_board_top_surface ,uart_board_connector_length , uart_board_connector_width , uart_board_connector_thickness , false ) ;
    }

```

Easier to understand, cleaner, uses the variables in easy to understand ways (at least easy to understand if you are a programmer and spend a bit of time reading it) and makes it very straightforward to turn on and off features. For those that are paying close attention, I decided that the square box was: A) Boring, B) Ugly. I added the ability to have a rounded case, in fact two types of rounded cases:

[![SimpleAllRoundBox]({% asset_path "3d-cases-img-5.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-5.png){:class="img-responsive lazyload"}

[![SimpleRoundBox]({% asset_path "3d-cases-img-6.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-6.png){:class="img-responsive lazyload"}

Progress, nice looking boxes (IMHO), select what features I want, when I want them. All good. Time to post the source file to github so others can use it. Put the file under GPLv2 licence, added a README file and other bits and posted it at: [https://github.com/96boards/96BoardCECase](https://github.com/96boards/96BoardCECase). Patches gladly accepted.

No good deed goes unpunished, by the next morning there was a Google+ posting on how someone had printed the case but it did not fit the boards. Wonderful! Another gent at Linaro has a 3D printer of a different brand than mine. He printed out the files and the sizing was off but in a different way from mine and the person on Google+. Hmmm, what is going on? More digging and it’s pretty clear consumer 3D printers differ in accuracy.

On top of that, after looking at a bunch of boards it was clear that sometimes in the manufacturing process the automatic pick and place machines and the soldering process end up with connectors in slightly different places across a board run or runs. Some boards the connectors are flush to the board edge, some the connectors stick out a tiny bit. Sometimes it’s the Type A USB connectors, sometimes it’s the HDMI connector, sometimes a mix. You just don’t know.

Between the manufacturing tolerances, 3D printer tolerances (or mis-configurations), there is no “single” perfect solution. You can print the case enough bigger than all issues in terms of manufacturing tolerances, the parts have only a little wiggle room or they would not work. Consumer and home built 3D printers can vary a lot as it turns out. Now I suspect commercial 3D printers are a different cup of tea, I mean we are talking the difference between $300 - $2000 dollar printers and $10,000 - $50,000+ dollar printers. But this case code is targeted at consumer and home built 3D printers that Makers build and/or use.

Back to the drawing board, how to add flexibility to the code so that you can tune for your local printer. Take my printer for example: It is a little small on the X plane and a little big on the Y and Z planes. With some thought about this I added X, Y and Z scalars, multipliers that can add or subtract to the sizing on each access to make the case to the proper size. and refactor the code to make the holes around connectors bigger so that if a connecter is sticking out from the board edge there is clearance for the bits and not put undue pressure on the solder connections.

The scalars are set to 1 by default, a person can print out a cube the size of the box they want, measure it and calculate what the scalars need to be set to to make the case exactly the right size. Increasing a scalar increases that plane, decreasing the scalar decreases that plane. It simply takes the final size and multiplies the scalar for the final size applied to the case. That seems to solve the ‘my printer is different then your’ printer issue.

Wow, this experience was both harder and easier than I had expected. Laying out the case was easy, making it configurable was a bit more complex, but definitely fun. Figuring out how to make adjustments for 3D printer variations was hard, I never thought about how much variability there can be in consumer and home built 3D printers.

The board should just fit recessed into the bottom case with the board top flush with edges of the case and the top just drops on.

[![SimpleAllRoundBoxTop]({% asset_path "3d-cases-img-7.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-7.png){:class="img-responsive lazyload"}

[![SimpleAllRoundBoxBottom]({% asset_path "3d-cases-img-8.png" %}){:class="img-responsive lazyload"} ](/assets/3d-cases-img-8.png){:class="img-responsive lazyload"}

**Case type options now:**

    1. rounded_case = true;// Square edge case or rounded edge case?
    2. only_rectangle_rounded = false;// Only the rectangle of the case rounded (sides) or all angles (top, bottom, sides)
    3. case_wall_thickness = 2.5; // in mm
    4. 96Boards_CE_extended_version = false;
    5. 96Board_UART_Board_Installed = false;
    6. expose_UART_Board_Button = false;
    7. expose_low_speed_connector = false;
    8. expose_high_speed_connector = false;
    9. expose_DragonBoardDipSwitch = true;

**Printing options:**


    1. slice = true;// For exporting .stl models, this will cut the model in 1/2 at the board top level. The board will fit into the bottom of the case cleanly and the top will sit on it
    2. slice_top = false;// top of the box or bottom


Turns out each 3D printer prints a little differently and that can make a board not fit the case so to be safe print out a 85x54x5 rectangle or a 100x85x5 rectangle depending on what size case you are making and then measure it with a digital caliper calculate the % big or small for each dimension and add it here. 1 is no scaling at all. It is entirely possible to have negative scaling .998 vs positive scaling 1.03 for each direction each printer has it's own thing. If the case is bigger than it needs to be but the board fits I'd leave it alone, this is really needed if the case is too small


    1. x_scalar = 1.0;
    2. y_scalar = 1.0;
    3. z_scalar = 1.0;



How round do you want curves and holes? The higher it set to the longer it takes to render.


    1. smoothness = 50; //10-200


**Debugging options:**

For development only: if you want to see the full case, the full diff model or the bare board model. The full diff model and the bare board model can help when adding new case type.  Set case=true for final case; false shows you the board and screw layout


    1. case = true;
    2. 96BoardBlock = true;


I will be adding to the file from time to time, as new mezzanine boards come out, if the community does not submit a patch quick enough I’ll try to get to it. But as it turned out there are a large quantity of people that use OpenSCAD, there are all kinds of models on [http://www.thingiverse.com/glitchpudding/collections/customizer/](http://www.thingiverse.com/glitchpudding/collections/customizer/) that are OpenSCAD models, and there are even some [96Boards](http://www.thingiverse.com/thing:1090288) [cases](https://github.com/mwelling/96boards-case) starting to show up. The more the merrier. It was fun learning a new tool, and useful, I won’t be letting the magic white smoke out of my boards anymore, at least not by shorting them out on my desk; I’m sure I can come up with other ways of doing it.
