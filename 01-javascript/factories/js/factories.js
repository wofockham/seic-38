// Factories: Mass Produce Objects

// Add "global" features to all our objects
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    carnivore: true,
    meow: function () {
      console.log('Meow, my name is: ' + this.name); // dynamic
    },
    eat: function (food) {
      console.log(`Yum, I love to eat ${ food }`);
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  const cat = cuteCats[ i ];
  console.log(`${ cat.name } has ${ cat.furColor } fur.`);
}


// Prototypal Inheritance: Prototypes
// Historically interesting but not essential

// Constructors (similar to a factory but with more magic)
const Cat = function (n, a, f) {
  // No need to create an object: an object is already there for you AND it's called: this.
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log('Meow, my name is ' + this.name);
  }
  // No need to return this: it gets returned automatically.
};

const cooper = new Cat('Cooper', 4, 'striped');
const audrey = new Cat('Audrey', 4, 'striped');

// The main "advantage"
// You can extend the protoype AFTER you create your instances.
Cat.prototype.species = 'feline';
Cat.prototype.eat = function (food) {
  console.log('Yum, I love to eat ' + food);
};

console.log( audrey.species ); // feline
cooper.eat('anything');
