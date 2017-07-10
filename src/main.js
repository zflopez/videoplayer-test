require('./styles/styles.scss');

var root = document.querySelector('#root')
root.innerHTML = "<p>Hello webpack.</p>"


var codeURL = require('./code.png');
var img = document.createElement('img')
img.src = codeURL
img.style.backgroundColor = "#2B3A42"
img.style.padding = "20px"
img.width = 32
document.body.appendChild(img)

console.log('hol2');