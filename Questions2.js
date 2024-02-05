//Create a JavaScript program that demonstrates the basic usage of regular expressions.
//Regular expressions are used in programming languages to match parts of strings.
//You create patterns to help you do that matching. Below is an example of extrating 
//only numbers from string stored in veriable numbers.

let shortHand = /[0-9]+/;
let numbers = "42%!";
let res = numbers.match(shortHand);

// Write a function that takes a regex pattern and a string as input and returns true 
//if there is a match, and false otherwise. Test the function with various patterns and 
//strings

function regexr(pattern, text) {

   let regex = new RegExp(pattern);
    return regex.test(text);
}

let shortHand2 = /\W/; // Match special characters
let sentence = "Coding!";
console.log(regexr(shortHand2, sentence));  // Output: true

let pattern2 = /[A-Z][a-z]+/;  // Match capitalized words
let sentence2 = 'HelloWorld';
console.log(regexr(pattern2, sentence2));  // Output: true
