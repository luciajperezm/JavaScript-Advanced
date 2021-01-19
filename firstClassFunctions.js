/* FIRST CLASS FUNCTIONS
 * A function is an instance of an object
 * A function behaves like an object
 * we can store functions in variables
 * we can pass a function as an argument to another function
 * we can return a function from a function
 */

 //Let's imagine we have a couple of arrays filled with values and we want to do some calculations with them

 var years = [1990, 1965, 1937, 2005, 1998];

 //we can create a function that will receive an array and return a results array
 
 function arrayCalc(arr, fn) {
     //loop over the array and return a result
     var arrResult = []; //open an empty array to push the result inside
     for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
     }
     //return the result
     return arrResult;
 }

 //we already have an array, let's add a couple of functions so we can test the arrayCalc through fn
 //this functions will only do one simple task. they are known as callback functions
 //the callback function will be called when we want to push an element to the array

function calculateAge(el) {
    return 2021 - el;
}

//now arrayCalc makes more sense
console.log(arrayCalc(years, calculateAge));

//now we have a function that accepts functions as input

//But, what about functions thar return functions??

/*let's create a function that creates different interview questions for different jobs
1. for each job we will returna function that builds a string using the person's name as an input
*/
function interviewQuestion(job) {
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
}

/*functions are always first class function in javaScript because they are effectively objects
so we simply return an object */

//this returns a function and we need a place to store it

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Lucia');
var designerQuestion = interviewQuestion('designer');