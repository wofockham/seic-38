// this lets us access the current object inside a method without needing to know the variable name.

const groucho = {
  fullname: 'Grouch Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.fullname;
  }
}


console.log( 'method/bound', groucho.greeting() ); // method

const unboundGreeting = groucho.greeting; // unboundGreeting is no longer a method
console.log( 'function/unbound', unboundGreeting() );

// bind() //////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho); // make groucho `this` permanantly
console.log('bind', boundGreeting());

const otherGreeting = groucho.greeting.bind({fullname: 'Harpo Marx', residence: 'NYC'});
console.log('bind', otherGreeting());

// call() //////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call(groucho) );

// apply() /////////////////////////////////////////////////////////////////////
const numbers = [99, 88, 77, 66];
Math.max( numbers )
// NaN
Math.max.apply( null, numbers ) // a => apply, a => array
// 99

> Math.max(...numbers) // es6 spread operator
