const searchFlickr = function (keywords) {
  console.log('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json'
  }).done(function (info) {
    console.log(info);
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form submission.
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });
});
