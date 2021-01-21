/*this are used when we want to hide a variable*/
//for example, the following is a normal function

function game() {
    var score = Math.random() + 10;
    console.log(score >= 5);
}
game();

//but we could have a hidden one like this
(function () {
    var score = Math.random() + 10;
    console.log(score >= 5);
})(); //you call the function at the end

/*a function without the name and parenthesis will tell the JS
parser that it is a function declaration but since we don't 
have any name for it then it would throw an error. So we basically
need to trick the parser into thinking this is an expression and not 
a declaration.
The solution is to wrap the entire thing in parenthesis because 
in JS what's inside of () cannot be a statement, after that we
only need to invoke the function at the end.
We cannot acces the score variable from the outside so we have 
data privacy
*/