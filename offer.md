---
layout: detail
title: Offer
---
Our collaboration proposals:
## Custom development
{% for text in site.data.offers["custom"].text %}

{{ text }}

{% endfor %}

## Technical leadership
{% for text in site.data.offers["project"].text %}

{{ text }}

{% endfor %}

## Training and mentoring
{% for text in site.data.offers["mentoring"].text %}

{{ text }}

{% endfor %}
