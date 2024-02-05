// Write a JavaScript program that demonstrates the use of character classes in regular expressions. 
// Create a function that searches for specific character classes in a given string and returns the matches. Test 
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters


function regexCharacterClass(inputString) 
{
    
    let digitPattern = /\d/g;
    let uppercasePattern = /[A-Z]/g;
    let lowercasePattern = /[a-z]/g;
    let specialCharacterPattern = /[^A-Za-z0-9]/g; //^ -> carat or negation, Match any character that is not a letter or digit
  
   //The logical OR || operator works as follows: if the expression on its left-hand side evaluates to true, it returns that value; 
   //otherwise, it evaluates the expression on its right-hand side and returns that value.
    
    let digits = inputString.match(digitPattern) || []; // If no matches are found (match() returns null), an empty array [] is assigned to digits.
    let uppercaseLetters = inputString.match(uppercasePattern) || [];
    let lowercaseLetters = inputString.match(lowercasePattern) || [];
    let specialCharacters = inputString.match(specialCharacterPattern) || [];
  
    
    return {
      digits,
      uppercaseLetters,
      lowercaseLetters,
      specialCharacters,
    };
  }
  

  let sampleString = 'Hello123! World';
  let matches = regexCharacterClass(sampleString); 

  console.log('Original String=', sampleString); // Output: Original String= Hello123! World
  
  console.log('Digits:', matches.digits); // Digits: [ '1', '2', '3' ]
  console.log('Uppercase Letters:', matches.uppercaseLetters); // Uppercase Letters: [ 'H', 'W' ]
  console.log('Lowercase Letters:', matches.lowercaseLetters);
// Output: Lowercase Letters: [
//   'e', 'l', 'l',
//   'o', 'o', 'r',
//   'l', 'd'
// ]
  console.log('Special Characters:', matches.specialCharacters); // Special Characters: [ '!', ' ' ]