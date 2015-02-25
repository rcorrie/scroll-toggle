/**
*
* Author:      Ricardo Corrie <https://github.com/rcorrie>
* Version:     scroll-toggle 0.0.1
* Modified:    Ricardo Corrie, 02/25/2015
*
* Documentation:
* 
*   -- General Overview
*       
*       ScrollToggle is a small JavaScript component that lets you apply classes to an
*       element depending on which direction the document is scrolled.
*
*       DEMO @ http://hiyermedia.com/scroll-toggle/
*
*   -- Use case
*
*       // To instantiate a new ScrollToggle element:
*
*       var foo = new ScrollToggle('.class-name-for-element');
*
*       // OR
*
*       var foo = new document.getElementById('element-id').ScrollToggle();
*
*       // To initialize listner:
*
*       foo.init();
*
*       // You can also pass custom options like so:
*
*       foo.init({offset: 500});
*
*       // You can halt ScrollToggle instance:
*
*       foo.halt();
*
*   -- Options
*
*       scrollClass:      {string} applies passed class name to element on init
*
*       scrollUpClass:    {string} applies passed class name to element on upwards scroll
*
*       scrollDownClass:  {string} applies passed class name to element on downward scroll
*
*       offset:           {integer} ignores scrolling between top margin and offset
*
*   -- Default Options
*       
*       scrollClass:      'scroll-toggle'
*
*       scrollUpClass:    'scroll-toggle-up'
*
*       scrollDownClass:  'scroll-toggle-down'
*
*       offset:           0
*
*
* TODO
*   
*   - Accept callback functions
*   - Package default CSS rules for plug-and-play
*
*/

;(function(def){

  window.ScrollToggle = def;
  Object.prototype.scrollToggle = def;

})(function(element){

  var _element = ( element  ? document.querySelector(element) : this );

  var lastScrollTop = 0;

  var scrollOptions = {
    scrollClass:      'scroll-toggle',
    scrollUpClass:    'scroll-toggle-up',
    scrollDownClass:  'scroll-toggle-down',
    offset:           0
  };

  // Private Methods

  var scrollListener = function(){
    var st = document.body.scrollTop;
    var scroll = st > lastScrollTop;
    if(st > scrollOptions.offset) applyToggle(scroll);
    lastScrollTop = st;
  };

  var applyToggle = function(scroll){
    _element.classList.remove( ( scroll ? scrollOptions.scrollUpClass : scrollOptions.scrollDownClass ) );
    _element.classList.add( ( scroll ? scrollOptions.scrollDownClass : scrollOptions.scrollUpClass ) );
  };

  var applyOptions = function(options){
    for(var key in options){
      scrollOptions[key] = options[key];
    };
  };

  // Public Methods

  function initScrollToggle(options){
    applyOptions(options);
    _element.classList.add(scrollOptions.scrollClass);
    setTimeout(function(){
      window.addEventListener('scroll', scrollListener);
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
