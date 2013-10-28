# Mission Focus Website

To run the website locally, run ```jekyll serve```. If you need it to actively poll for changes, pass it the ```--watch``` flag. 

To create a new post, you have to follow Jekyll's naming convention in the ```_posts``` directory. The convention is ```YEAR-MONTH-DAY-title.MARKUP```, e.g.:

	2011-12-31-new-years-eve-is-awesome.md

To create static pages, create an .html file at the top level. At the top of the file, you need to pass in two variables as follows:

	---
		layout: default
		title: Mission Focus
	---

The ```layout``` variable determines which template to use from the ```_layouts``` directory. Any content you write here will be populated into the ```{{ content }}``` tag in that template and can be written using liquid tags. We currently have a default template, the blog posts page template, and an individual post template.

The ```_plugins``` directory holds any converters the compiler might need (such as the LESS compiler). 

The ```_site``` directory holds the compiled site.

The ```_includes``` holds assets such as external libraries.