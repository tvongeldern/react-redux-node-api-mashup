'use strict';
const Promise = require('bluebird');
const _ = require('lodash');

module.exports = (artistdata) => {
    const songCount = _.get(artistdata, 'itunes.songs.count', 0) * .075;
    const songCost = _.get(artistdata, 'itunes.songs.averageCost', 0) > 1 ? 10 : 0;
    const albumCount = _.get(artistdata, 'itunes.albums.count', 0);
    const albumCost = _.get(artistdata, 'itunes.albums.averageCost', 0) * 3;
    const wikiName = _.get(artistdata, 'wikipedia.name', false) ? 5 : 0;
    const wikiDisc = _.get(artistdata, 'wikipedia.discography', false) ? 5 : 0;
    const wikiVid = _.get(artistdata, 'wikipedia.videography', false) ? 5 : 0;
    const wikiTour = _.get(artistdata, 'wikipedia.tour', false) ? 5 : 0;
    const score = songCount + songCost + albumCount + albumCost + wikiName + wikiDisc + wikiVid + wikiTour;
    return Promise.resolve({score});
};
