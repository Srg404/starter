# STARTER THEME FOR DRUPAL 8

## General Informations

* Created by: Serge Lecomte (srg404@gmail.com) 
* Git: https://github.com/Srg404/starter


## Tools used 

### Grunt

[Grunt](http://gruntjs.com/) is a *Task Runner*, he will handle the biggest part of the workflow. In short there is 2 main tasks **build** and **default**.

* The **build** compile your sass changes.
* The **default** task will watch your changes and compile your sass changes.


### SCSS 

* [SCSS](http://sass-lang.org) is a CSS extension language. The files will be compiled into CSS, SCSS introduces Functions, Mixins, Variables, inheritance and a lot more features to CSS.


## To install your new theme

1. Install [NodeJS](http://nodejs.org/) if you do not have it yet

2. Install Grunt if you don't have them yet

		$ sudo npm install -g bower grunt-cli

5. Copy theme in your project www/themes/custom/

6. Rename folder and  files starter.info.yml, starter.libraries.yml et starter.theme
 
7. Edit your starter.info.yml and change information with yours

8. Install the project (from the theme folder)

		$ npm install

## To work on your new project

1. To work on the project (from the theme folder)

    $ grunt 
        
