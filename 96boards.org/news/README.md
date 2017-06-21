---
layout: markdown-about-page
permalink: /news/
title: 96Boards | News
breadcrumb-title: News
breadcrumb-section: About
breadcrumb-subtitle: News
---
## News
<br />
<div class="col-md-6">
    <div class="list-group">
        <a class="list-group-item active">
            96Boards in the News
        </a>
        {% for news in site.data.news[0]["linaro"] %}
                    <a target="_blank" href="{{ news['link'] | capitalize }}" class="list-group-item">{{ news['title'] }}</a>
        {% endfor %}
    </div>
</div>
<div class="col-md-6">
    <div class="list-group">
        <a href="" class="list-group-item active">
            Linaro 96Boards News
        </a>

        {% for news in site.data.news[0]["external"] %}
                    <a target="_blank" href="{{ news['link'] | capitalize }}" class="list-group-item">{{ news['title'] }}</a>
        {% endfor %}
    </div>
</div>
