// Write a JavaScript function called outerFunction that takes a parameter and returns an inner function. 
// The inner function should access both the parameter of outerFunction and a variable declared within 
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these 
// variables even after outerFunction has finished executing.

function outerFunction(parameter) {
    var innerVariable = "inner variable";
  

    function innerFunction() {
    
      console.log("Parameter is:", parameter);
      console.log("Inner variable is :", innerVariable);
    }
  

    return innerFunction;
  }
  

let outerFunctionResult = outerFunction("Hello");
let innerFunctionResult = outerFunctionResult();
  
// The above code will output:
//  Parameter is: Hello
//  Inner variable is : inner variable

// Above code shows that lexical scoping allows the inner function to maintain access to these 
// variables even after outerFunction has finished executing.