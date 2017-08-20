'use strict';
const request = require('request-promise');

const processData = require('../helpers/itunes-data');

const ITUNES_API = "https://itunes.apple.com/search?entity=song&limit=200&term=";

module.exports = (artist) => {
    const uri = ITUNES_API + artist;
    return request.get(uri)
        .then((response) => processData(response));
};
