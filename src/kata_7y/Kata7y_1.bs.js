// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function openOrSenior(seniors) {
  return Belt_Array.map(seniors, (function (senior) {
                var age = Caml_array.get(senior, 0);
                var handicap = Caml_array.get(senior, 1);
                if (handicap > 7 && age >= 55) {
                  return "Senior";
                } else {
                  return "Open";
                }
              }));
}

exports.openOrSenior = openOrSenior;
/* No side effect */
