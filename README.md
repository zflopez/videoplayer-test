# Video Player Test

## Summary
This project uses *BackboneJS* powered by *Webpack 2* and based on a modular architecture with components.


## Features

Uses jQuery, underscore.js, Backbone.Radio and dashjs (implementation for the playback of MPEG DASH via JavaScript) among others.

Optimized for **Chrome, Firefox and Safari** (in this case, it uses native video player to play HLS instead of MPEG-DASH).

It supports English (subtitles included), Spanish and Arabic, and adapts web direction to language selected.


## Installation

Requires Node.js to run.
Install the dependencies and devDependencies and start the server.


### Dependencies

        $ cd videoplayer
        $ npm run launch

### Web server

In Chrome, requires a web server for running the video.

        $ cd videoplayer
        $ npm run server

You should see something like the following:

        Project is running at http://localhost:8080/
        webpack output is served from /

Open that local website in your browser like http://localhost:8080/src and there you have it!