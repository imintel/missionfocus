# Mission Focus Website

[![Build Status](https://travis-ci.org/helenvholmes/missionfocus.png?branch=master)](https://travis-ci.org/helenvholmes/missionfocus)

Instructions for adding new team member photos, adding new blog posts, and adding/removing the 'currently hiring' section from the site for [missionfocus.com](missionfocus.com).

## Production
Github will only run Jekyll in safemode - this means that any plugins being used in development will break. ([LESS](http://www.lesscss.org/) plugins, [Coffeescript](http://coffeescript.org/) plugins, etc). In order to not break [missionfocus.com](missionfocus.com) in production, please follow the appropriate format for making changes to the public facing site:

Compilie site (jekyll build, check nothing is broken with jekyll serve)
Push to master, pushes _site to gh-pages
Master stays clean
Work on separate branches for breaking chances to ensure stuff doesn't get messed up

# Careers Section
To advertise new positions open at Mision Focus, there are two things you should update: 

-- main page
-- careers section

# Team Photos
Team photos accompany each blog post. In order to associate the right photo with the blog post, in the top of the blog post the following YAML should be stated:

```
	---
	layout: post
	title: "D3: Multiple Brushes"
	author: Meredith M. Myers
	img: mmmyers.png
	date: 2013-10-16 10:50
	description: How to select multiple time ranges using D3 brushes.
	---
```

Team photos should follow the proper naming convention of <em>first initial, middle initial, last name.png</em> like in the example above.

# Resources Used for Testing
[Chrome Extension for Responsive Testing](https://chrome.google.com/webstore/detail/responsive-inspector/memcdolmmnmnleeiodllgpibdjlkbpim?hl=en)

# Libraries Used