//Function Constructor - pattern 

var lucia = {
    name: 'Lucia',
    yearOfBirth: 1996,
    job: 'developer'
};

/* we create a function constructor called Person, this functions are written witha capital letter */
var Person  = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2021 - this.yearOfBirth);
    }
}/* now we can use it to create a lucia object*/

var lucia = new Person('Lucia', 1996, 'developer');

lucia.calculateAge();