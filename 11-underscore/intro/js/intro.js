console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .each() /////////////////////////////////////////////////////////////////////
// es5 or greater you already have .forEach

_(nums).each(function (n, index, entireArray) {
  console.log( `n: ${ n }, index: ${ index }, entireArray: ${ entireArray }` );
});

// Alternative syntax (preferred in the documentation)
// _.each(nums, function (n) {
//   console.log( n );
// });

const obj = {
  'January': 15,
  'February': 11,
  'March': 8
};

_(obj).each(function (sales, month) {
  console.log(`${ sales } sales in ${ month }`);
});

// .map() //////////////////////////////////////////////////////////////////////
// map() lets you create new arrays from old arrays.
console.log( nums );

const byNineteen = function (x) {
  return x * 19;
};

const nineteenTimesTable = _(nums).map(byNineteen);
console.log( nineteenTimesTable );

// Objects:
const salesInfo = _(obj).map(function (sales, month) {
  return `${ month } had ${ sales } sales`;
});

// .reduce() ///////////////////////////////////////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  return runningTotal + n;
});
console.log( total );

// reduce also works for objects.

// find() //////////////////////////////////////////////////////////////////////
const divisibleByFive = function (candidate) {
  console.log(`Considering: ${ candidate }, return: ${ candidate % 5 === 0 }`);
  return candidate % 5 === 0;
};

const firstMultipleOfFive = _(nums).find(divisibleByFive); // first
console.log( firstMultipleOfFive );

// filter() ////////////////////////////////////////////////////////////////////
const allMultiplesOfFive = _(nums).filter(divisibleByFive); // all

// reject() ////////////////////////////////////////////////////////////////////
const notDivisibleByFive = _(nums).reject(divisibleByFive);

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'sweet'},
  {name: 'Chico', instrument: 'piano', disposition: 'sleazy'},
];

console.log( _(bros).pluck('disposition') );

// .max()
// .min()
// .shuffle()
// .sample()
