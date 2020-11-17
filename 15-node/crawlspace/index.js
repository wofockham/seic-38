const Crawler = require('crawler');

// Predicate function to decide if we want to add a URL to the queue.
const isCrawlable = (url) => {
  if (! url) return false;
  if (! url.startsWith('http')) return false;

  const terribleSites = ['archive.md', 'facebook.com', 'medium.com', 'twitter.com'];
  return ! terribleSites.some( awfulSite => url.includes(awfulSite) ); // Heavy magic

  // const awfulSiteDetected = terribleSites.some((awfulSite) => {
  //   if (url.includes(awfulSite)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })

  // if (awfulSiteDetected === true) {
  //   return false;
  // }
  //
  // return true; // default
};

const c = new Crawler({
  rateLimit: 1000,
  callback: function (err, res, done) { // error first pattern
    if (typeof res.$ === 'function') {
      const title = res.$('title').text();
      console.log( title ); // Show the title
      console.log( res.request.uri.href ); // Show you the URL
      console.log(); // Create some space

      const $links = res.$('a');

      $links.each(function () {
        const href = res.$(this).attr('href');
        if (isCrawlable(href)) {
          c.queue( href );
        }
      });
    }

    done();
  }
});

c.queue(process.argv[2] || 'https://lobste.rs/');
