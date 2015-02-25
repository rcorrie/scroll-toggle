/**
*
* Author:      Ricardo Corrie <https://github.com/rcorrie>
* Version:     scroll-toggle 0.0.2
* Modified:    Ricardo Corrie, 02/25/2015
*
* # ScrollToggle
* ScrollToggle is a small JavaScript component that lets you apply classes to an element depending on which direction the document is scrolled.
* 
* [DEMO](http://hiyermedia.com/scroll-toggle/)
* 
* ## Documentation:
* 
* ### Use case
* ```javascript
* // instantiate a new ScrollToggle element:
* 
* var foo = document.getElementById('element-id').scrollToggle();
* 
* // Or, if you use jQuery
* 
* var foo = $('#element-id').scrollToggle();
* 
* // initialize listner:
* 
* foo.init();
* 
* // Or also pass custom options like so:
* 
* foo.init({offset: 500});
* 
* // halt ScrollToggle instance:
* 
* foo.halt();
* ```
* ### Callback
* You can provide a callback function to scrollToggle to override the default
* toggle function like so
* ```
* var foo = $('#fixed-header').scrollToggle(function(direction, element){
* 	if(direction) element.hide();
* 	else element.show();
* });
* 
* foo.init();
* ```
* ### Options
* 
* 	scrollClass:      {string} applies passed class name to element on init
* 
* 	scrollUpClass:    {string} applies passed class name to element on upwards scroll
* 
* 	scrollDownClass:  {string} applies passed class name to element on downward scroll
* 
* 	offset:           {integer} ignores scrolling between top margin and offset
* 
* ### Default Options
* 
* 	scrollClass:      'scroll-toggle'
* 
* 	scrollUpClass:    'scroll-toggle-up'
* 
* 	scrollDownClass:  'scroll-toggle-down'
* 
* 	offset:           0
* 
* ## TODO
* 
* ~~accept callback function~~
* ~~Package default CSS rules for plug-and-play~~
* ~~Provide uglified JS~~
* ~~Provide minified CSS~~
*
*
*/

;(function(def){

  Object.prototype.scrollToggle = def;

})(function(callback){

  var self = this;
  var _element = ( self.classList ? self : self[0] );
  var _callback = callback || applyToggle;

  var lastScrollTop = 0;

  var scrollOptions = {
    scrollClass:      'scroll-toggle',
    scrollUpClass:    'scroll-toggle-up',
    scrollDownClass:  'scroll-toggle-down',
    offset:           0
  };

  // Private Methods

  function scrollListener(callback){
    var st = document.body.scrollTop;
    var scroll = st > lastScrollTop;
    if(st > scrollOptions.offset) callback(scroll, self);
    lastScrollTop = st;
  };

  function applyOptions(options){
    for(var key in options){
      scrollOptions[key] = options[key];
    };
  };

  function applyToggle(scroll){
    _element.classList.remove( ( scroll ? scrollOptions.scrollUpClass : scrollOptions.scrollDownClass ) );
    _element.classList.add( ( scroll ? scrollOptions.scrollDownClass : scrollOptions.scrollUpClass ) );
  };


  // Public Methods

  function initScrollToggle(options){
    applyOptions(options);
    _element.classList.add(scrollOptions.scrollClass);
    setTimeout(function(){
      window.addEventListener('scroll', function(){
        scrollListener(_callback);
      });
    }, 500)
  };

  function haltScrollToggle(){
    window.removeEventListener('scroll', scrollListener);
  };

  return {
    init: initScrollToggle,
    halt: haltScrollToggle
  };

});
