const makeMadLib = function (e) {
  e.preventDefault(); // Stay here!
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();

  const story = `${ person } really likes ${ adjective } ${ noun }.`;
  $('#story').text(story);
};

$(document).ready(function () {
  $('form').on('submit', makeMadLib);

  $('h1').funText(500, ['#ff7400', '#cd0074', '#0c0']);
  $('li').funText(300, ['#ff7400', '#cd0074', '#0c0']);
});

// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
