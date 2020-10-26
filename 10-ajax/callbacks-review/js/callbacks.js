// Callbacks Review ////////////////////////////////////////////////////////////

// A callback function is a function passed to another function
// which calls that function for you, at some later point in time.

// Javascript is asynchronous.

// Timers: ACB
console.log('A');
setTimeout(function () {
  console.log('B: time has passed');
}, 4000);
console.log('C');

// jQuery's document ready: I III II
console.log('I');
$(document).ready(function () {
  console.log('II: The document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND THEN MAYBE Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS (yet)

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// colors.each do |c|
//   puts c
// end

// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction(someArray[i]);
  }
};

each(colors, function (c) {
  console.log(c.toUpperCase() + ' Marx');
});

colors.forEach(function (c) {
  console.log(c);
});

// Which is faster? It depends
