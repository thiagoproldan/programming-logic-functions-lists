let drawnNumbersList = []; // List to store drawn numbers
let limitNumber = 10; // Limit for the random number generation
let secretNumber = generateRandomNumber(); // Generate the initial secret number
let attempts = 1; // Counter for the number of attempts

// Function to display text on the screen and speak it out loud using responsiveVoice
function displayTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'US English Male', { rate: 1.2 });
}

// Function to display the initial game messages
function displayInitialMessage() {
    displayTextOnScreen('h1', 'Secret Number Game'); // Display the game title
    let messageNumberBetween = `Choose a number between 1 and ${limitNumber}`;
    displayTextOnScreen('p', messageNumberBetween); // Display the range message
}

// Display the initial messages when the game starts
displayInitialMessage();

// Function to check the user's guess
function checkGuess() {
    let guess = document.querySelector('input').value; // Get the user's guess from the input field
    
    if (guess == secretNumber) {
        displayTextOnScreen('h1', 'You got it right!'); // Display success message
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt'; // Determine the correct word for attempts
        let attemptsMessage = `You discovered the secret number with ${attempts} ${attemptWord}!`;
        displayTextOnScreen('p', attemptsMessage); // Display the number of attempts
        document.getElementById('restart').removeAttribute('disabled'); // Enable the restart button
    } else {
        if (guess > secretNumber) {
            displayTextOnScreen('p', 'The secret number is smaller'); // Inform the user the guess is too high
        } else {
            displayTextOnScreen('p', 'The secret number is larger'); // Inform the user the guess is too low
        }

        attempts++; // Increment the attempt counter
        clearField(); // Clear the input field for the next guess
    }
}

// Function to generate a random number and ensure it hasn't been chosen before
function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1); // Generate a random number between 1 and limitNumber
    let listSize = drawnNumbersList.length;

    // Reset the list if all numbers have been drawn
    if (listSize == limitNumber) {
        drawnNumbersList = [];
    }

    // If the number has already been drawn, generate another one (recursion)
    if (drawnNumbersList.includes(chosenNumber)) {
        return generateRandomNumber(); // Recursion
    } else {
        drawnNumbersList.push(chosenNumber); // Add the number to the list of drawn numbers
        console.log(drawnNumbersList); // Log the list for debugging purposes
        return chosenNumber;
    }
}

// Function to clear the input field
function clearField() {
    let guess = document.querySelector('input');
    guess.value = '';
}

// Function to restart the game
function restartGame() {
    secretNumber = generateRandomNumber(); // Generate a new secret number
    clearField(); // Clear the input field
    attempts = 1; // Reset the attempt counter
    displayInitialMessage(); // Display the initial messages again
    document.getElementById('restart').setAttribute('disabled', true); // Disable the restart button until the game is won again
}
