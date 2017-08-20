'use strict';
const Promise = require('bluebird');

module.exports = (response) => {
    const data = JSON.parse(response) || [];
    let links = data.filter((arr) => typeof arr === 'object' && /http/.test(arr[0]))[0] || [];
    let attributes = { name: !!links.length, discography: false, videography: false, tour: false };
    links.forEach((lnk) => {
        if (/discography/i.test(lnk)) { attributes.discography = true; }
        if (/videography/i.test(lnk)) { attributes.videography = true; }
        if (/tour/i.test(lnk)) { attributes.tour = true; }
    });
    return Promise.resolve(attributes);
};
