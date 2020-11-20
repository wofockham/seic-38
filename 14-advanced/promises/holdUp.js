// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise -- call it holdUp

const holdUp = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// Make this code work:
holdUp(3000).then(() => {
  console.log('3 seconds has elapsed');
}).then(() => {
  console.log('Have a nice day');
});
