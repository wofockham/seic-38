$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation:
  // $('parent').on('click', 'child', ...)
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Deselect previous selections.
    $(this).addClass('selected');
  });

  // Event delegation for efficiency:
  $('.canvas').on('mousemove', '.pixel', function (event) {
    if (event.shiftKey === false) return;
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
