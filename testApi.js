const http = require('./tools/helpers/requester').http;

(async () => {
    const offers = await http.get('/offers');

    console.log(offers);
})();
