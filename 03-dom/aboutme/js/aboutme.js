// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname'); // selection
nickname.innerHTML = 'The Blade'; // manipulation

document.getElementById('favorites').innerHTML = 'Groucho, Harpo, Chico';
document.getElementById('hometown').innerHTML = 'Glasgow';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const image = document.createElement('img'); // detached DOM node
image.src = 'http://via.placeholder.com/250';
document.body.appendChild(image); // no longer detached
