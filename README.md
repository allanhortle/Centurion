Centurion
=========

A clean cut UI theme for Sublime Text 2 bastardised from the source code of [Soda].

Centurion was made out of a want for less UI and more code. It's so minimal you can barely see it.
No gradients, no 1px edges and not a thousand different icon sprites. Just color, shape and 14 [icons].

![Centurion theme](https://raw.github.com/allanhortle/Centurion/master/res/preview.png)

---

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

---

Custom Colors
-------------
I've re-written Centurion to use [Grunt]. As a result you can now make your own
custom colored versions of the theme. If you haven't used grunt before, then you probably should learn. It's super amazing.

Because package control likes to cache and update installed packages I suggest cloning an extra copy of the centurion repo into your packages folder.
That way you'll still be informed of updates but you wont get your color constantly changed back to green.

I call mine `Theme - Centurion_dev`. Im undecided as to whether or not this is the best option. But it works so this is how it will be for now.

_* Side note: if you call your folder something like `AAACenturionRadColor` it might not take precedence over the original package. So if you do have two copies give it a name that is alphabetically lower than `Theme - Centurion`._

###The actual instructions bit:

1. `cd` into the theme directory.
2. `npm install` To install the grunt dependancies.3.
3. Open up `Gruntfile.js` and look for `folderName:'Theme - Centurion'`
4. Just make sure this matches what ever you have named the folder.
5. Next look for `config.hero = config.green;`
6. change the color to what ever radical choice you have in mind.You can use the predefined ones from Galea or go nuts with your own `[r,g,b]` combination.
7. Back to terminal and run `grunt`.
8. Close and reopen Sublime Text.
9. Ride an eagle into the sunset. You're all done.


---
## Galea
Centurion now ships with it's own syntax highlighting. Galea is a simple theme designed to cut down on the use of color in conflicting locations. There are only five colors, each relating to a high level Textmate scope.

| Color         | Scope                |
| ------------- |----------------------|
| Yellow      	| Entity / Tag         |
| Red      		| Support / Keyword    |
| Orange 		| Storage    		   |
| Green         | String               |
| Blue          | Constant             |

Additionally each file's background is tinted to distinguish it's type. Front-end remains grey, backend is blue and data-files are green.

### Bugs
If you like the theme and  find some bugs please do let me know. I've been testing it only with my current pipeline so there are bound to be file types that miss out. Just bug it out and I'll do my best to fix them up.


[grunt]: http://gruntjs.com/ "It really is the business"
[soda]: https://github.com/buymeasoda/soda-theme/
[icons]: http://www.glyphicons.com/