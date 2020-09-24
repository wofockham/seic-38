const thumbnailify = function ($l) {
  const href = $l.attr('href'); // Variadic: getter with 1 argument

  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $image = $('<img>'); // detached DOM node wrapepd in jQuery power
  $image.attr('src', thumbnailURL); // Variadic: setter with 2 arguments

  $l.prepend($image);

  $l.on('click', function (event) {
    event.preventDefault(); // don't follow the link
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#player').hide().html(embedHTML).fadeIn(3000); // chaining: Fluent interface
  });
};

const $links = $('li a'); // Convention to denote jQuery objects.

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // .eq() access via an index to DOM nodes but they retain jQuery power
  thumbnailify( $link );
}

// Too clever for now:
// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//   );
// });
