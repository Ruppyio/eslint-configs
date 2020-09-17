(function test() {
  'use strict';

  function inner() {
    let foo = 'bar';
  
    foo = 'bazz';

    // eslint-disable-next-line no-console
    console.log(foo);
  }

  inner();
}());
