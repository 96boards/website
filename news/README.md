---
title: News
permalink: /news/
layout: container-breadcrumb-tabs
---
<div class="col-md-6">
    <div class="list-group">
        <a class="list-group-item active">
            Linaro 96Boards News
        </a>
        {% assign linaro-news = site.data.news.entries | where: "tag","news" %}
        {% for news in linaro-news %}
                    <a href="{{ news['link'] | capitalize }}" class="list-group-item">{{ news['title'] }}</a>
        {% endfor %}
    </div>
</div>
<div class="col-md-6">
    <div class="list-group">
        <a href="" class="list-group-item active">
            96Boards in the News
        </a>
        {% assign external-news = site.data.news.entries | where: "tag","external-news" %}
        {% for news in external-news %}
                    <a target="_blank" href="{{ news.link | capitalize }}" class="list-group-item">{{ news.title }}</a>
        {% endfor %}
    </div>
</div>

{% include members.html %}
