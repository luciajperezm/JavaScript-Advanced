/*====================================================================
INHERITANCE AND PROTOTYPE CHAIN
====================================================================*/

/*In JS there are two types of values, primitives and objects. 
Objects interact with one another through methods and properties, we use
them to store data, structure applications into modules and keeping our
code clean.
In the next example we have three objects 
*/ 
var john = {
    name: 'john',
    birthYear: 1984,
    job: 'driver',
    isMarried: true
};
var luke = {
    name: 'luke',
    birthYear: 1993,
    job: 'clown',
    isMarried: true
};
var maria = {
    name: 'maria',
    birthYear: 1981,
    job: 'teacher',
    isMarried: false
};
//it would be better to store this in a 'base' object where we can generate as many as we want
var Person = {
    name: 'value',
    birthYear: 0000,
    job: 'value',
    isMarried: 'value'
};

//this base object is called a constructor or prototype and John, Luke and Maria are instances
//so inheritance is when an object is based on another object and gets access to its properties and methods
 /*
 going back to this example, imagine that you also need another constructor called athlete
 that has different properties and methods but that it needs the Person's object properties
 and methods 
 
 An athlete also has a name, a birthYear, a job and marital status...
 so Person -> athlete ==> inheritance 
 */

 /*Inheritance works by using prototypes, which means that every object in JS
 has a prototype property.
 The prototype property of an object is where we put methods and properties
 that we want other objects to inherit. 
 */
/*The constructor's prototype property is not the prototype of the constructor itself;
it's the prototype of all instances that are created through it  */
