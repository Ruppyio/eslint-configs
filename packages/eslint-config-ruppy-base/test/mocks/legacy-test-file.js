(function test() {
  'use strict';

  function inner() {
    var foo = 'bar';
  
    foo = 'bazz';

    // eslint-disable-next-line no-console
    console.log(foo);
  }

  inner();
}());
