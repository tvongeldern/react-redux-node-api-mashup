'use strict';
const Promise = require('bluebird');

const getItunes = require('../getters/itunes');
const getWikipedia = require('../getters/wikipedia');
const calculateBigtimeness = require('../helpers/calculate-bigtimeness');

module.exports = (req, res) => {
    const query = req.query.artist || '';
    const artist = query.replace(' ', '+');
    Promise.all([getItunes(artist), getWikipedia(artist)])
        .spread((itunes, wikipedia) => Promise.resolve({ itunes, wikipedia }))
        .then((data) => calculateBigtimeness(data))
        .then((score) => res.send(score))
        .catch((error) => res.send({error}));
};
