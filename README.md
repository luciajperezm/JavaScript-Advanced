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
This functions will be "hidden" and cannot be accessed from the outside because they don't have a name.
A function without a name and parenthesis will tell the JS parser that it is a function declaration but since we don't have any name for it then it would throw an error. So we basically need to trick the parser into thinking this is an expression and not 
a declaration.

The solution is to wrap the entire thing in parenthesis because in JS what's inside of () cannot be a statement, after that we
only need to invoke the function at the end. We cannot acces the variable from the outside so we have data privacy. --> iife.js

## Closures
An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned. --> closures.js

## 






