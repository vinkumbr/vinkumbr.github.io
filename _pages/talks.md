---
layout: page
permalink: /talks/
title: Presentations
description: Presentations in reversed chronological order.
nav: false
nav_order: 1
---
<!-- _pages/talks.md -->
{% if site.data.talks.talk_titles %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.talks.talk_titles %}
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item">{{ site.data.talks.talk_title: site.data.talks.talk_conf @site.data.talks.talk_venue }}</li>
    </ul>
  {% endfor %}
</div>
{% endif %}