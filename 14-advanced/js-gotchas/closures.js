// Bad: global `id` could be overwritten by someone else's code:
// let id = 0;
// const nextID = function () {
//   return id++; // Post increment
// };

// Higher Order Function
// const helloMaker = function () {
//   const greeting = 'Hello'; // greeting persists through a closure.
//   return function () {
//     console.log( greeting );
//   }
// };
//
// const sayHi = helloMaker();

const nextIDMaker = function () {
  let id = 0;
  return function () {
    return id++;
  }
}

// nextID(); // 0
// nextID(); // 1
// nextID(); // 2
// nextID(); // 3
// nextID(); // 4
// nextID(); // 5
// console.log( id );

// HTML Tags: 200ish
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// }

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`
  }
};
const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');

console.log( p('hotdogs') ); // <p>hotdogs</p>
