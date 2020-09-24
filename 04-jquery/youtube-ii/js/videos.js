const $links = $('li a'); // Convention to denote jQuery objects.

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // .eq() access via an index to DOM nodes but they retain jQuery power
  const href = $link.attr('href'); // Variadic: getter with 1 argument

  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const $image = $('<img>'); // detached DOM node wrapepd in jQuery power
  $image.attr('src', thumbnailURL); // Variadic: setter with 2 arguments

  $link.prepend($image);
}

// Too clever for now:
// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//   );
// });
