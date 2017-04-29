# Twitter Improvement Project

## About

The TIP aims to add some special enhancements to Twitter.com's 
main timeline, including hiding most of the "useless" interface 
elements (moments, who to follow, trends, etc), and adding night
mode.

Currently, it is being sold on the Chrome Webstore for $0.99USD,
as a way of supporting the developer, however you can follow Installing
if you'd prefer to use a slightly more bleeding edge source. And 
if you want to support me, drop a buck for the web store version.

## Features

 - Tidies up the Twitter.com timeline
 - Implements night mode toggle
 - Allows syncing of night mode across browsers
 - Persistant nav menu along the top

## Installing

`git clone https://github.com/twitter-improvement-project`

Go to `chrome://extensions`, and make sure to enable developer mode.
Then, click 'load unpacked extension' and select the folder 
`twitter-improvement-project`.

Chrome will bother you about developer extensions, you can get rid
of this by buying the extension on the Chrome webstore, which
includes a free trial to give it a try.

## Night Mode

### Colours

`@todo: example colour swatch pngs`

Muted / background colour: #1B2836  # Dark navy blue
Text: #C7CBCE  # Off-white
Border: #414F5C  # Standard gr(a/e)y
Highlights: #1DA1F2  # Light blue

### Toggling

Toggling nightMode is taken care of by script.js - when 
the night mode button is clicked, it toggles the `night-mode` class
in `<body>`. This button is in the top nav bar on Twitter as it
is the easiest place to see it.
