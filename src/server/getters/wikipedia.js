'use strict';
const request = require('request-promise');

const processData = require('../helpers/wikipedia-data');

const WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";

module.exports = (artist) => {
    const uri = WIKIPEDIA_API + artist;
    return request.get(uri)
        .then((response) => processData(response));
};
