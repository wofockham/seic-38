// recreate `cat` in JS

const fs = require('fs'); // This is the builtin Node.js standard library.

// Synchronously: this is wrong
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log( fileData );

// Many asynchronous Node.js functions implement the Error First Pattern:
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // A bit wanky
  }

  console.log(data);
});

console.log('this will run WHILE the file is being loaded');
