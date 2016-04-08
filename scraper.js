var scraperjs = require('scraperjs');
scraperjs.StaticScraper.create('http://today.turing.io/outlines/2016-04-08/')
    .scrape(function($) {
      // find an h4 somehow equal to the this.props.module value that we are passing in
      // find the next h4
      // return all the html between those two values


        return $("#section").nextUntil("#section-1").map(function() {
          return $(this).html();
        });
    })
    .then(function(news) {
        console.log(news);
    })


    // "scraperjs": "1.2.0",
    // "phantomjs": "1.9.20"
