# Mission Focus Website

[![Build Status](https://travis-ci.org/helenvholmes/missionfocus.png?branch=master)](https://travis-ci.org/helenvholmes/missionfocus)

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

[Chrome Extension for Responsive Testing](https://chrome.google.com/webstore/detail/responsive-inspector/memcdolmmnmnleeiodllgpibdjlkbpim?hl=en)