const { namesWithMassParam } = require('./calc')
const request = require('request')


request('https://dou.ua/', function (error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log(document.querySelector("body > div.g-page > div.b-footer-slider.m-hide")); // Print the HTML for the Google homepage.
});

// namesWithMassParam(70)