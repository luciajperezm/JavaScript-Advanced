//so far this is how we've been writing objects
var john = {
    name: 'John',
    yearOfBirth: 1996,
    job: 'dev'
};

/*the most popular way to crate a function is to create a function
constructor, which is a pattern that we use to write a some sort of
blueprint
*/

//To write a function constructor use a capital letter at the beginning
//THIS IF A FUNCTION CONSTRUCTOR
var Person = function(fullName, birthYear, pet) {
    this.fullName = fullName;
    this.birthYear = this.birthYear;
    this.pet = pet;
};

//With the function in place we can create a john object
var john = new Person('John smith', 1995, 'dog');

/* 1. In order to understand how this works we need to know what 
the 'new' operator does. when we use the new operator a brand new 
object is created, then after that the constructor function is called 
with the arguments that we pass inside the ()*/

//NOW LET'S ADD INHERITANCE

/*imagine you want to add a method to an object, we could just add it 
to our function constructor like we did before*/
var Person = function(fullName, birthYear, pet) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.pet = pet;
    this.calculateAge = function() {
        console.log(2020 - this.birthYear);
    }
};
var john = new Person('John smith', 1995, 'dog');
john.calculateAge();

//now we create another object
var lucia = new Person('Lucia Perez', 1996, 'cat');
/* we don't need to add this lucia.calculateAge(); because every new object has the method calulateAge()
attached to it *-* but this is not eficient, in this exmple it doesn't really matter because we have
few objects, but if we had hundreds of objects it would be very difficult to manage, which is why we
create a prototype*/

//this is the object 
var Person = function(fullName, birthYear, pet) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.pet = pet;
};

//here we create the prototype
Person.prototype.calculateAge = function() {
    console.log(2020 - this.birthYear);
} 


var john = new Person('John smith', 1995, 'dog');
var jane = new Person('Jane soros', 1975, 'cat');
var lucia = new Person('Lucia Perez', 1996, 'dog');
john.calculateAge();
jane.calculateAge();
lucia.calculateAge();

/*the proprty is not inside the constructor but it can still access it 
because it's in the prototype property of the constructor*/