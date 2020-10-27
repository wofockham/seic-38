const fetchCover = function (event) {
  event.preventDefault(); // Don't leave this page.

  const title = $('#title').val();
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

  // Modern jQuery: Deferreds
  $.ajax(url).done(function (data) {
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  }).fail(function () {
    console.error('There was error!');
  });

  // Classic jQuery:
  // $.ajax(url, {
  //   success: function (data) {
  //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
  //     $('#cover').attr('src', cover);
  //   }
  // });
};

$(document).ready(function () {
  const $form = $('#search-form');
  $form.on('submit', fetchCover);
});
