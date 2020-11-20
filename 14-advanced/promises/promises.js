// Promises are an evolution of callbacks:
//   a way to handle or process data from an asynchronous preocess, whenever that process is finished

const fs = require('fs');

// readFile is asynchronous
// fs.readFile('simpsons.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log(content);
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject( err );
      }

      resolve( content );
    })
  });
};

// readFile('simpsons.txt').then((fileContent) => {
//   console.log(fileContent);
// }).catch((err) => {
//   console.error('there was error', err);
// });

const simpsonsPromise = readFile('simpsons.txt');

// pretend hundreds of lines of code pass

simpsonsPromise.catch((err) => {
  console.error('something bad happen', err);
});

// more lines of code

simpsonsPromise.then((c) => {
  console.log( c );
});

// further lines of code
simpsonsPromise.then((c) => {
  console.log( c.toUpperCase() );
});

setTimeout(() => {
  simpsonsPromise.then((moreSimpsons) => {
    console.log('Here they are again', moreSimpsons);
  });
}, 8000);


// await/async /////////////////////////////////////////////////////////////////
// Further evolution of Promises, we can pretend that promises are actually synchronous.

// readFile('simpsons.txt').then((data) => {
//   console.log(data);
// });
const printSimpsons = async () => {
  const data = await readFile('simpsons.txt');
  console.log(data);
};
console.log('ASYNC/AWAIT EXAMPLE');
printSimpsons();
