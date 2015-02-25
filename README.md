# ScrollToggle
ScrollToggle is a small JavaScript component that lets you perform actions on elements depending on which direction the viewport is scrolled.

[DEMO](http://hiyermedia.com/scroll-toggle/)

## Documentation:

### Use case
```javascript
// instantiate a new ScrollToggle element:

var foo = document.getElementById('element-id').scrollToggle();

// Or, if you use jQuery

var foo = $('#element-id').scrollToggle();

// initialize listner:

foo.init();

// Or also pass custom options like so:

foo.init({offset: 500});

// halt ScrollToggle instance:

foo.halt();
```
### Callback
You can provide a callback function to scrollToggle to override the default
toggle function like so
```javascript
var foo = $('#element-id').scrollToggle(function(direction, element){
	if(direction) element.hide();
	else element.show();
});

foo.init();
```
### Options

	scrollClass:      {string} applies passed class name to element on init

	scrollUpClass:    {string} applies passed class name to element on upwards scroll

	scrollDownClass:  {string} applies passed class name to element on downward scroll

	offset:           {integer} ignores scrolling between top margin and offset

### Default Options

	scrollClass:      'scroll-toggle'

	scrollUpClass:    'scroll-toggle-up'

	scrollDownClass:  'scroll-toggle-down'

	offset:           0

## TODO

* ~~accept callback function~~
* ~~Package default CSS rules for plug-and-play~~
* ~~Provide uglified JS~~
* ~~Provide minified CSS~~
