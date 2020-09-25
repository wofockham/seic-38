// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$('body').css({'font-family': 'Arial, sans-serif'});

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
$('#nickname').text('The Blade');
$('#favorites').text('Groucho, Harpo, Chico');
$('#hometown').text('Glasgow');

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$('ul:first li').addClass('listitem');

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
$('<img src="http://via.placeholder.com/250">').appendTo('body');
// $('body').append('<img src="http://via.placeholder.com/250">');
