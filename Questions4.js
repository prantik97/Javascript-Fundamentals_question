// Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not 
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the 
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) 
// from a given string.

function regexr(pattern, text) {

    let regex = new RegExp(pattern);
     return text.match(regex);
 }

 const dateString = "Today is 02-02-2024";
 const datePattern = /(\d{2})-(\d{2})-(\d{4})/g; // Pattern with groups for day, month, and year
 
 const result = regexr(datePattern, dateString);
 
 console.log(result) //output: [ '02-02-2024' ]
 