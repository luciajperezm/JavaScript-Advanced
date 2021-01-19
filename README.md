# JavaScript-Advanced
JavaScript Advanced topics

## Inheritance and the prototype chain
Inheritance works by using prototypes, every object in JS has a prototype property.
The prototype of an object is where we put methods and properties that we want other objects to inherit. 

The constructor's prototype property is not the prototype of the constructor itself; it's the prototype of all instances that are created through it.

## Creating objects using the function constructor
When we use the 'new' operator a brand new object is created, then the constructor function is called 
with the arguments that we pass inside. functionConstructor.js

## Creating objects with object.create
This is another popular way to create objects objectCreate.js

## First class functions
This functions will only do one simple task, they are known as callback functions. They basically accept another funcion as input.
This functions can also return functions! check firstClassFunctions.js

## Immediately Invoked Function Expressions (IIFE)

