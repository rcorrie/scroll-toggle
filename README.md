# ScrollToggle
ScrollToggle is a small JavaScript component that lets you perform actions on elements depending on which direction the viewport is scrolled.

[DEMO](http://hiyermedia.com/scroll-toggle/)

Also check out the [angular-scroll-toggle](https://github.com/rcorrie/angular-scroll-toggle) AngularJS directive.

## How to use
Include the JS and CSS files.

Instantiate a new ScrollToggle element.

```javascript
var foo = document.getElementById('element-id').scrollToggle();
```

Or, if you use jQuery.

```javascript
var foo = $('#element-id').scrollToggle();
```

Initialize listner.
```javascript
foo.init();
```

Or, also pass custom options like so:
```javascript
foo.init({offset: 500});
```

And halt ScrollToggle instance:
```javascript
foo.halt();
```
You can also provide a callback function to scrollToggle to override the default
toggle function like so
```javascript
var foo = $('#element-id').scrollToggle(function(direction, element){
	if(direction) element.html('Scrolling Down');
	else element.html('Scrolling Up');
});

foo.init();
```
### Options

*	`scrollClass`       applies passed class name to element on init

*	`scrollUpClass`     applies passed class name to element on upwards scroll

*	`scrollDownClass`   applies passed class name to element on downward scroll

*	`offset`            ignores scrolling between top margin and offset

## TODO

* ~~accept callback function~~
* ~~Package default CSS rules for plug-and-play~~
* ~~Provide uglified JS~~
* ~~Provide minified CSS~~
