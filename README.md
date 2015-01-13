# CodePros- Boilerplate Project

#### CodePros structure for FrontEnd Projects With Bootstrap, jQuery, SASS &amp; Compass support.

## Features

  * Bootstrap
  * Node.js
  * Sass and Compass
  * Bower for assets organization
  * Grunt.js for building (and many tasks already configured!)
  * Great file/folder organization!
  * 100% upgradable


### coming soon
  * One command build and deploy
  
## Quickstart

  First of all, you need to install the applications below:
  * [Git](http://git-scm.com/) ...dah!
  * [Ruby](https://www.ruby-lang.org/en/) 1.9 or higher
  * [Node.js](http://nodejs.org)
  * Grunt `npm install -g bower grunt-cli`
  * Bower `npm install -g bower`
  * Compass `[sudo] gem install compass`
  * Boostrap Sass `gem install bootstrap-sass`

  Well done, now you have all the requirements to get this project working!

 ## Downloading

Just download and unzip or clone the project inside the folder you want
  * [Download] or clone:

 > rm -rf .git

This will remove the Git information so that you can re-initialize the project for Git or any other Source Versioning Control software you wish to use.


  * Optional: Install or update all Grunt dependencies running:
  `npm install`

  * Or just open your folder and run:
   `grunt`  - Use it when developing, takes less time to run and don't compress your files. Good for debug. It also open your defalt browser start a local server with livereload :)
   
## Folder Structure

  This project is organized following the structure below:

  * __node_modules__     - All plugins used by grunt and modules from Node: clean, uglify, compass, etc...
  * ___/components__     - The global style(scss),js of application goes hereoverrides.
  * __app__              - Your HTML files ,font and javascripts only. Grunt will bring images and css for you, don't worry.
  * __build__            - Here goes your project ready for run. Deploy? Just copy this folder and be happy. DON'T CODE ANYTHING HERE!!!

SASS files can be created in:

> _/components/scss

## Configuration Files!

  * __package.json__ - Project version information for building. Project name, author, version goes here.
  * __Gruntfile.js__ - This file is to Grunt, what bower.json is to bower. Here goes Grunt dependencies/plugins and its configurations. Like bower, if you add a new dependency, run `npm install` to download the new dependencies
  *__.gitignore__    - All useful gitignore file.