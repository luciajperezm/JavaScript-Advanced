/*this is another way to create object and inheritance
1. we first define an object that will act as a prototype
2. create an object based on that prototype
*/

//we don't use capital letter at the beginning because is not a function constructor
var personProto = {
    calculateAge: function() {
        console.log(2016 - yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';


//now let's do this for another person
var jane = Object.create(personProto, {
    name: {value : 'Jane'},
    yearOfBirth: {value : 1969},
    job: {value: 'designer'}
});