Centurion
=========

A clean cut UI theme for Sublime Text bastardised from the source code of [Soda](https://github.com/buymeasoda/soda-theme/).

Centurion was made out of a want for less UI and more code. It's so minimal you can barely see it. 
No gradients, no 1px edges and not a thousand different icon sprites. Just color, shape and 14 [icons](http://www.glyphicons.com/).  
I think it works best with the [Tomorrow Night - Eighties](https://github.com/chriskempson/tomorrow-theme) theme.

![Centurion theme](https://raw.github.com/allanhortle/Centurion/master/Centurion.png)  

Installation
------------------------------------------------------------------------
###Package Control

Just install it and make sure to update your `Settings - User` file with:

    "theme": "Centurion.sublime-theme"
    

###Manual

Clone it into your packages directory. These are OSX paths because I'm lazy like that. For Windows/Other just substitute your paths like a boss.

    cd ~/Library/Application Support/Sublime Text 2/Packages

    git clone git://github.com/allanhortle/Centurion.git 'Theme - Centurion'
       
Make sure you have the `Theme - Centurion` at the end of the command so it is placed in the correct folder.  
Unless of course you feel like experiencing the wrath of none icons. 

Back to Sublime Text, press `super+,` to access your `Settings - User` and insert: 
        
        "theme": "Centurion.sublime-theme"

If it looks like crap make sure to restart Sublime before crying. 

## Galea
Centurion now ships with it's own syntax highlighing. Galea is a simple theme designed to cut down on the use of color in conflicting locations. There are only five colors, each relating to a high level textmate scope. 

| Color         | Scope                |
| ------------- |----------------------|
| Yellow      	| Entity / Tag         |
| Red      		| Support / Keyword    |
| Orange 		| Storage    		   |
| Green         | String               |
| Blue          | Constant             |

Additionally each file's background is tinted to distinguish it's type. Frontend remains grey, backend is blue and datafiles are green. 

### Bugs
If you like the theme and  find some bugs please do let me know. I've been testing it only with my current pipeline so there are bound to be file types that miss out. Just bug it out and I'll do my best to fix them up. 


