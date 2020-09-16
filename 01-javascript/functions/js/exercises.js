// # Exercises: Functions
//
// ## The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.

const tellFortune = function (numKids, partnerName, geoLocation, jobTitle) {
  const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`;
  return fortune;
};

const firstFortune = tellFortune(6, 'Sidney', 'Paris', 'chalk artist');
console.log(firstFortune);

const secondFortune = tellFortune(7, 'Georgia', 'Brixton', 'rare book dealer');
console.log(secondFortune.toUpperCase());

const thirdFortune = tellFortune(5, 'Jonesy', 'Liverpool', 'window washer');
console.warn(thirdFortune);

// ## The Puppy Age Calculator
//
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
// - Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function (age, humanToDogYearsRatio=7) {
  const message = `Your doggie is ${ age * humanToDogYearsRatio } years old in dog years!`;
  return message;
};

const dogAge1 = calculateDogAge(1); // 7
console.log(dogAge1);

const dogAge2 = calculateDogAge(2); // 14
console.error(dogAge2);

const dogAge3 = calculateDogAge(3, 5); // 15
console.log(dogAge3.toLowerCase());

// ## The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (currentAge, amountPerDay) {
  const deathAge = 84;

  const amountPerYear = amountPerDay * 365.25; // leap years
  const yearsRemaining = deathAge - currentAge;

  const amountRequired = Math.ceil(yearsRemaining * amountPerYear);
  return `You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`;
};

console.error( calculateSupply(36, 5) );
console.log( calculateSupply(36, 4.3) );
console.log( calculateSupply(36, 3) );



// ## The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumference:
//
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
//
// Create a function called calcArea:
//
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

const calcCircumference = function (radius) {
  const circumference = 2 * radius * Math.PI;
  console.log(`The circumference is ${ circumference }`);
};

calcCircumference(1);
calcCircumference(2);
calcCircumference(3);

const calcArea = function (radius) {
  const area = Math.PI * radius * radius; // PI r^2
  console.log(`The area is ${ area }`);
}

calcArea(1);
calcArea(2);
calcArea(3);

// ## The Temperature Converter
//
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const celsiusToFahrenheit = function (celsius) {
  const fahrenheit = (celsius * 1.8) + 32;
  console.log(`${ celsius }°C is ${ fahrenheit }°F`);
  return fahrenheit;
};

celsiusToFahrenheit(20);

const fahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  console.log(`${ fahrenheit }°F is ${ celsius }°C`);
  return celsius;
};

// Sort of annoyingly clever thing
fahrenheitToCelsius( celsiusToFahrenheit(20) );
