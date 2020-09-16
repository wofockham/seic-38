// ## Exercises: Arrays
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

const cats = [ 'Garfield', 'Audrey', 'Cooper', 'Winston' ];

for (let k = 0; k < cats.length; k++ ) {
  console.log( `My #${ k+1 } choice is ${ cats[ k ] }` );
}
