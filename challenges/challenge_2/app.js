// Create a function that displays "Hello, world!" without console.
function helloWorld() {
  alert('Hello, world!');
}

helloWorld();

// Create a function that takes a name as a parameter and displays "Hello, [name]!" in console.
function helloName(name) {
  console.log(`Hello, ${name}!`);
}

helloName('John');

// Create a function that takes a number as a parameter and returns twice that number.
function doubleNumber(number) {
  return number * 2;
}

var result = doubleNumber(5);
console.log(result);

// Create a function that takes three numbers as parameters and returns their average.
function averageNumbers(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

var average = averageNumbers(5, 10, 15);
console.log(average);

// Create a function that takes two numbers as parameters and returns the larger of them.
function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2; // Ternary operator
}

var larger = largerNumber(10, 20);
console.log(larger);

// Create a function that takes a number as a parameter and returns the result of multiplying that number by itself
function squareNumber(number) {
  return number * number;
}

var square = squareNumber(5);
console.log(square);