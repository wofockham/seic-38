$(document).ready(function () {
  $.getJSON('/animals').done(function (results) {
    results.forEach(function (animal) {
      $('<p></p>').text(`${ animal.name} is ${ animal.species }`).appendTo('body');
    });
  });

  setInterval(function () {
    $.getJSON('/info').done(function (info) {
      $('#brother').text( info.brother );
      $('#time').text( info.time );
      $('#uptime').text( info.uptime );
    });
  }, 2000);

  // setInterval(function () {
  //   $.get('/brother').done(function (name) {
  //     $('#brother').text(name);
  //   })
  // }, 4000);
  //
  // setInterval(function () {
  //   $.get('/time').done(function (output) {
  //     $('#time').text(output);
  //   });
  // }, 1000);
  //
  // setInterval(function () {
  //   $('#uptime').load('/uptime');
  // }, 3000);
});
