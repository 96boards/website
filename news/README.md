---
title: News
permalink: /news/
layout: markdown-about-page
redirect_from:
- /linaro/96boards-and-open-source-hardware/
- /linaro/dragonboard-410c-announced-by-qualcomm/
- /linaro/linaro-announces-96boards-initiative-to-accelerate-arm-software-development-2/
- /linaro/linaro-announces-actions-technology-as-a-founding-member-of-the-linaro-community-boards-group/
- /linaro/linaro-announces-marvell-as-a-founding-member-of-the-linaro-community-boards-group/
- /news-archive/129-hikey-board-features-a-64-bit-arm-hisilicon-processor-complies-with-linaros-96boards-specifications/
- /news-archive/96boards-linaro-development-boards-initiative-129-hikey-with-hisilicon-64bit-kirin620/
- /news-archive/actions-technology-invests-in-enabling-linaros-open-source-development-community/
- /news-archive/arrow-electronics-joins-linaro-to-help-bring-innovative-new-boards-to-market/
- /news-archive/avec-96boards-les-cartes-de-developpement-a-base-de-processeur-arm-cortex-a-ont-leur-standard-ouvert/
- /news-archive/hikey-an-8-core-64-bit-arm-cortex-a53-board-for-129-usd-but-with-one-sad-flaw/
- /news-archive/lava-lab-to-integrate-hikey-from-96boards-org/
- /news-archive/linaro-announces-96boards-initiative-to-accelerate-arm-software-development/
- /news-archive/linaro-lance-un-nouveau-format-de-cartes-meres-arm-low-cost/
- /news-archive/linaro-launches-96boards-sbc-standard-and-first-armv8-board/
- /news-archive/linaro-launches-open-arm-sbc-spec-and-an-octa-core-sbc/
- /news-archive/linaro-offers-new-arm-board-designs/
- /news-archive/open-is-as-open-does-parsing-an-announcement/
- /activity/
- /forum/
---
## News
<br />
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
