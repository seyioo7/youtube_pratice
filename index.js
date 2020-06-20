/* creating a funtion that takes in a name and says hello fo
followed by your name*/

function greeting(yourName) { 
    var result = 'Hello' + ' ' + yourName; // String Concatenation 
console.log(result)
}
var name = prompt('What is your name?');
greeting(name);

// how do argument work in functions?
// how do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}
sumNumbers(2, 3);