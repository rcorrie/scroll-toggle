# ScrollToggle
ScrollToggle is a small component that lets you apply classes to an element depending on which direction the document is scrolled.
## Documentation:

### General Overview

ScrollToggle is a small component that lets you apply classes to an element depending on which direction the document is scrolled.

### Use case
```javascript
// To instantiate a new ScrollToggle element:

var foo = new ScrollToggle('.class-name-for-element');

// OR

var foo = new document.getElementById('element-id').ScrollToggle();

// To initialize listner:

foo.init();

// You can also pass custom options like so:

foo.init({offset: 500});

// You can halt ScrollToggle instance:

foo.halt();
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

