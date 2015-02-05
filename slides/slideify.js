var fs = require('fs');

var slides = fs.readFileSync('./slides.html');
var title = 'BEKK Frontend 2015 - NPM dojo';

document.querySelector('.slides').innerHTML = slides;
document.querySelector('title').text = title;
