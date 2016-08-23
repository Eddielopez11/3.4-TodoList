// Main.js
"use strict";

var $ = require('jquery');
var input = require('./input.js');
var rem = require('./remove.js');
var completed = require('./completed.js')

// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here

  input.init();
  completed.init();
  rem.init();

});
