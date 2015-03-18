// src/main.js
var foo = require('./foo');

function sayHello() {
  console.log('Hello! ' + foo());
}

module.exports.sayHello = sayHello;
