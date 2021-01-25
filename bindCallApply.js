/*let's start by creating an object*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher'
}
//now we create a method which allows john to present himself
//in a formal and informal way, also depending on the time of day

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies! I´m ' + this.name + ', I´m a ' + this.job + ' and I´m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('hi, how are you? I´m ' + this.name + ', I´m a ' + this.job + ' and I´m ' + this.age + ' years old. Have a nice day');
        }
    }
} 
john.presentation('friendly', 'morning');

//we can call this function to another object   **********CALL********** This is also called method borrowing

var lucia = {
    name: 'Lucia',
    age: 24,
    job: 'Software Developer'
}
//we call it this way
john.presentation.call(lucia, 'formal', 'afternoon');


//there is a similar method which is called APPLY, the only difference is that it accepts arguments as an array
john.presentation.apply(lucia, ['friendly', 'afternoon']);


//The bind method
/*it is ery similar, but this generates a copy of a function and it allows
you to store it in a variable*/








