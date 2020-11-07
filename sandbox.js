"use strict";

var myArray = [{name: 'Gordon'}];

function exampleFunction(thing) {
  thing.name = 'changed by exampleFunction';
  
  thing.thing = {name: 'new thing'};
}

exampleFunction(myArray[0]);
exampleFunction(myArray[0].thing);