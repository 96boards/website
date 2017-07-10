---
title: OpenHours
description: |-
    96Boards OpenHours – Sponsored by Linaro welcomes you every week at 4:00pm UTC to participate in the ultimate community driven experience.
    Bring your coffee and questions, demos and feedback, together we can make a difference for everyone!
permalink: "/openhours/"
layout: empty-container-page-no-nav
---
<div class="col-md-6" markdown="1">

<h3>Weekly Show</h3>
<div class="open-hours-clock"></div>

### This week – [ADD TO CALENDAR](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWxyNWlsZzFibDVwZzNrZjJ0b2s5aWtjdm9fMjAxNzA3MTNUMTYwMDAwWiBhMXFxdjZqaHIxYTBhdDJzbGxuazVpNzRpNEBn&tmsrc=a1qqv6jhr1a0at2sllnk5i74i4%40group.calendar.google.com)

**OpenHours Episode #61** – Unfortunately, episode #61 of OpenHours will be canceled and moved to next week ([07/13/2017](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWxyNWlsZzFibDVwZzNrZjJ0b2s5aWtjdm9fMjAxNzA3MTNUMTYwMDAwWiBhMXFxdjZqaHIxYTBhdDJzbGxuazVpNzRpNEBn&tmsrc=a1qqv6jhr1a0at2sllnk5i74i4%40group.calendar.google.com)).

Don’t forget to join us in our new [OpenHours IRC channel](https://webchat.freenode.net/): **#OpenHours & #96boards**

* * *

### What is 96Boards OpenHours?

**96Boards OpenHours – Sponsored by Linaro** welcomes you every week at 4:00pm UTC to participate in the ultimate community driven experience. Bring your coffee and questions, demos and feedback, together we can make a difference for everyone!

We’ll begin these sessions with introductions and announcements, presentation or tutorial and then be open to answer any questions regarding 96Boards products, the specifications, troubleshooting etc.. We don’t promise to answer all the questions immediately and may need to defer answers to a later session, but we’ll try our best to answer during the call.

These sessions will be held on BlueJeans and recorded so they can be made available after the session. There is a limit to a 100 participants so it will be first come first served initially!

We look forward to talking with you

The 96Boards Team

### New Board Launch Event

[View on YouTube](https://youtu.be/-6AVlw4VwRQ)

{% include media.html media_url="https://www.youtube.com/embed/-6AVlw4VwRQ" %}

</div>
<div class="col-md-6">
<div class="openhours-panel" markdown="1">
### When

Every Thursday at 4pm UTC – [ADD TO CALENDAR](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWxyNWlsZzFibDVwZzNrZjJ0b2s5aWtjdm9fMjAxNzA3MTNUMTYwMDAwWiBhMXFxdjZqaHIxYTBhdDJzbGxuazVpNzRpNEBn&tmsrc=a1qqv6jhr1a0at2sllnk5i74i4%40group.calendar.google.com)

### How to Join

**To join the Meeting:**  
[http://link.linaro.org/openhoursjoin](http://link.linaro.org/openhoursjoin)

**To join via phone :**  
1\. Dial: +1.408.740.7256 or 943216362  
2\. Enter the meeting ID: 943216362

([More numbers](http://bluejeans.com/numbers?ll=en) +1.888.240.2560 or +1.408.317.9253)

* * *

### Follow Us!

**96Boards**  
[Twitter](https://twitter.com/96Boards) | [Facebook](https://www.facebook.com/96Boards) | [Linkedin](https://www.linkedin.com/company/96boards)

**Robert Wolff (Host):**  
[Twitter](https://twitter.com/sdrobertw) | [Linkedin](https://www.linkedin.com/in/sdrobertw)

**Previous OpenHours Video**

{% include media.html media_url="https://www.youtube.com/embed/videoseries?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk" %}

* * *

{% include image.html alt="OpenHours" name="OpenHours.png" %}


</div>
</div>
<div class="col-md-12">
<hr/>
<h3>Most Recent Open Hours Blogs</h3>
<div class="row blog-row">
    <div class="col-md-12">
        {% for post in site.tags.OpenHours %}
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <a href="{{post.url}}">
                        <img class="img-responsive blog-img lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="/assets/images/thumbnails/{{post.featured_image}}" />
                    </a>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-12 post_title no-padding">
                    <a href="{{post.url}}"><h3>{{ post.title}}</h3></a>
                    <em>{{ post.date | date: "%A, %B %-d, %Y"}}</em><br />
                    <p class="post_excerpt">
                        {{post.content | strip_html | truncatewords:30}}
                    </p>
                    <p>
                        <a href="{{post.url}}">
                            <button class="btn blog-read-more-btn">Read More</button>
                        </a>
                    </p>
                </div>
            </div>
        {% endfor %}
    </div>
</div>
</div>
