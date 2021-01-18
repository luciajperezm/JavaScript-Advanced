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



