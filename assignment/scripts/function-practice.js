console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, Your Name!"


}
  

// Remember to call the function to test
helloName();

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber ) {
  firstNumber = 5;
  secondNumber = 4;
  return firstNumber + secondNumber;
  

  

  // return firstNumber + secondNumber;
 'firstNumber + secondNumber';
  console.log('together value',firstNumber, secondNumber)}

console.log(addNumbers);
// 4. Function to multiply three numbers & return the result
function multiplyThree() {
  firstNumber = 2;
  secondNumber = 4;
  thirdNumber = 3;
  return firstNumber * secondNumber * thirdNumber;}


console.log('multiplied value', multiplyThree);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true; 
  } else (number<0)
  return false;
}
console.log(isPositive);
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
let result = array.pop();
return result;
}
let arr
console.log(getLast);
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
var array= ["jim", "bill", "tim", "john", "joe"]
console.log(array.length)
function find(value, array) {
for(i =0; i < array.length; i++) {
  if(array[i] === value) {
    return true;
       }
    }
    return false;
  }
  console.log(find);


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
