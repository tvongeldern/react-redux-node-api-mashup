'use strict';
const Promise = require('bluebird');

module.exports = (response) => {
    const data = JSON.parse(response) || { results: [] };
    let albums = { count: 0, totalCost: 0, releases: [], bestOf: 0 };
    let songs = { count: 0, totalCost: 0 };

    data.results.forEach((v) => {
        const result = v || {};
        const albumName = result.collectionName || collectionCensoredName || '';
        const albumPrice = result.collectionPrice || 0;
        if (albums.releases.indexOf(albumName) === -1) {
            albums.releases.push(albumName)
            albums.count += 1;
            albums.totalCost += albumPrice;
            if (/greatest of|best of|collection/ig.test(albumName)) {
                albums.bestOf += 1;
            }
        }
        songs.count += 1;
        songs.totalCost += (result.trackPrice || 0);
    });

    albums.averageCost = albums.totalCost / albums.count;
    songs.averageCost = songs.totalCost / songs.count;
    delete albums.releases;

    return Promise.resolve({ songs, albums });
};
