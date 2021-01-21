/*To understand this concept we will use as an example a function
that throws a function that calculates years until retirement*/

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

/*As you know, this returns a function so we can store the result 
in a variable 
*/

var retirementUS = retirement(66);
retirementUS(1996); //this will return 40 years until retirement

//a better way to call the function
retirement(66)(1996); //either way it throws the same result

/* 
An inner function always has access to the variables and parameters of its outer
function, even after the outer function has returned. 
*/

//do the following example with a closure
/*function interviewQuestion(job) {
    if (job === 'designer') {
        //returns another function
        return function(name) {
            console.log(name + ', can you please explain what UX design id?');
        }
    }else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name){
            console.log('Hello, What do you do?');
        }
    }
}*/
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' makes pretty things');
        } else if (job === 'teacher') {
            console.log(name + ' taches kids how to code');
        } else {
            console.log(name+ ' does something else :)');
        }
    }
}
interviewQuestion('teacher')('Mariela');

