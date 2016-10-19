
Centurion
=========

A clean cut UI theme for Sublime Text 2 bastardised from the source code of [Soda](https://github.com/buymeasoda/soda-theme/).

Centurion was made out of a want for less UI and more code. It's so minimal you can barely see it.

![Centurion theme](https://raw.github.com/allanhortle/Centurion/master/res/Preview.png)


## Installation

Just install through [Package Control](https://sublime.wbond.net/) and make sure to update the theme in your `Settings - User` file with:

    "theme": "Centurion.sublime-theme"

or

    "theme": "CenturionLight.sublime-theme"

To update the syntax hightlighting using [Galea](#galea) make sure you add following lines into your `Settings - User` file:

    "color_scheme": "Packages/Theme - Centurion/Galea.tmTheme"

or

    "color_scheme": "Packages/Theme - Centurion/GaleaLight.tmTheme"

## Customisation

Centurion has a few settings that you can tweaking that you can apply through your `Settings - User` file. Below is a list of all the properties you can activate. Just boink them into your settings file and toggle at will.

```
// Colors
"centurion_color_blue": false,
"centurion_color_red": false,
"centurion_color_yellow": false,
"centurion_color_orange": false,
"centurion_color_grey": false,

// UI
"centurion_tab_close_buttons": false,
"centurion_tab_scrolling": false,

```


## Galea

![Centurion theme](https://raw.github.com/allanhortle/Centurion/master/res/Galea.png)

Centurion now ships with its own syntax highlighting. Galea is a simple theme designed to cut down on the use of color in conflicting locations. There are only five colors, each relating to a high level Textmate scope.

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
