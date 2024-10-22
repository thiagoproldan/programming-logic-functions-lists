// Change the content of the h1 tag with document.querySelector and assign the following text: Challenge Time.
var h1 = document.querySelector('h1');
h1.innerHTML = 'Challenge Time';

// Create a function that displays the message The button was clicked on the console whenever the Console button is pressed.
function displayMessageInConsole() {
  console.log('The button was clicked');
}

// Create a function that displays an alert with the message: I love JS, whenever the Alert button is pressed.
function displayAlert() {
  alert('I love JS');
}

// Create a function that runs when the prompt button is clicked, asking for the name of a city in Brazil. Then, display an alert with the message concatenating the response with the text: I was in {city} and I remembered you.
function displayPrompt() {
  var city = prompt('Enter the name of a city in Brazil');
  alert(`I was in ${city} and I remembered you`);
}

// When clicking the sum button, ask for 2 integers and display the sum result in an alert.
function displaySum() {
  var firstNumber = parseInt(prompt('Enter the first number'));
  var secondNumber = parseInt(prompt('Enter the second number'));
  var result = firstNumber + secondNumber;
  alert(`The sum is ${firstNumber} + ${secondNumber} = ${result}`);
}