// Create a function that calculates a person's body mass index (BMI), based on their height, in meters, and weight, in kilograms, which will be received as a parameter.
function calculateBMI(height, weight) {
  return weight / (height * height);
}

calculateBMI(1.75, 70);

// Create a function that calculates the factorial value of a number passed as a parameter.
function calculateFactorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for(let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

let number = 5;
let result = calculateFactorial(number);
console.log(`The factorial of ${number} is ${result}`);

calculateFactorial(5);

// Create a function that converts a value in dollars, passed as a parameter, and returns the equivalent value in reais. To do this, consider the dollar exchange rate equal to R$4.80.
function convertDollarToReal(dollar) {
    let exchangeRate = 4.80;
    let real = dollar * exchangeRate;
    return real.toFixed(2); // toFixed(2) is used to round the number to 2 decimal places
}

let dollar = 10;
let real = convertDollarToReal(dollar);
console.log(`$${dollar} is equivalent to R$${real}`);

// Create a function that displays the area and perimeter of a rectangular room on the screen, using the height and width that will be given as parameters.
function calculateAreaAndPerimeter(height, width) {
    let area = height * width;
    let perimeter = 2 * (height + width);
    console.log(`The area of the room is ${area} and the perimeter is ${perimeter}`);
}

calculateAreaAndPerimeter(5, 10);

// Create a function that displays the area and perimeter of a circular room on the screen, using its radius that will be provided as a parameter. Consider Pi = 3.14.
function calculateAreaAndPerimeterCircle(radius) {
    let area = 3.14 * (radius * radius);
    let perimeter = 2 * 3.14 * radius;
    console.log(`The area of the circle is ${area} and the perimeter is ${perimeter}`);
}

calculateAreaAndPerimeterCircle(5);


// Create a function that displays the multiplication table of a number given as a parameter on the screen.
function multiplicationTable(number) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplicationTable(5);