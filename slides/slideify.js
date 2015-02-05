var fs = require('fs');

var slides = fs.readFileSync('./slides.html');
var title = 'Miniseminar 2014 - CSS Quality';

document.querySelector('.slides').innerHTML = slides;
document.querySelector('title').text = title;
