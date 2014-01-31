---
layout: post
title: "How to Make an Icon Font"
author: Helen V. Holmes
img: hvholmes.png
date: 2014-01-30 14:13
description: Better than CSS sprite sheets by far.
header: post--iconfont.jpg
---

# How to Make an Icon Font
Resources: Inkscape (free), GlyphsApp ($300)

## Why an Icon Font?
All the benefits of fonts without the pitfalls of SVGs or images - infinitely scaleable, cross-browser compatible, and color is easily customizable. 

## Steps to Build an Icon Font (Inkscape)
1. Useful template for getting started: [Community Icon Font Template](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)
2. Open the **SVG Font Editor Pane**. **Add Glyph** > type in a letter your want it to correspond to.
3. Import the SVG and align to baseline (blue line, which hands slightly below canvas). 
4. Ungroup vector and ensure Inkscape understands it as one glyph by going to **Path > Union**. If **Union** isn't working, it's typically because groups still dxist in your shape.
5. With vector selected, in the SVG Font Editor Pane: **Get Curves from Selection** with glyph you want it associated with selected.
6. Continue steps 1-5 for all of the glyphs you want to add. For ensuring glyphs are the same size, I leave other glyphs out in the artspace to compare. Glyphs out in the artspace won't affect the end font file.
7. Save the file as font-name.svg.
8. Convert the svg file to a font file at a converter site, such as [FreeFontConverter](http://www.freefontconverter.com/).
9. To generate an @font-face kit for the font for web use, use the generated font file at a site such as [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator).

Origin article: [How to Make Your Own Icon Webfont](http://www.webdesignerdepot.com/2012/01/how-to-make-your-own-icon-webfont/)