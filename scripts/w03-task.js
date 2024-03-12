 /* LESSON 3 - Programming Tasks */

/* Function Declaration */

/* Addition Feature */
// This function takes two parameters, number1 and number2, and returns their sum.
function add(number1, number2) {
    return number1 + number2;
}

// This function retrieves two input values, adds them using the 'add' function, and updates the result in the DOM.
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Adding a click event listener to the 'Add Numbers' button, triggering the 'addNumbers' function.
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression */

/* Subtraction Feature */
// This variable holds an anonymous function assigned to the 'subtract' variable, which subtracts number2 from number1.
var subtract = function (number1, number2) {
    return number1 - number2;
};

// This variable holds an anonymous function assigned to the 'subtractNumbers' variable, retrieving input values and updating the result in the DOM.
var subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Adding a click event listener to the 'Subtract Numbers' button, triggering the 'subtractNumbers' function.
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Functions */

/* Multiplication Feature */
// This constant holds an arrow function that multiplies number1 by number2.
const multiply = (number1, number2) => number1 * number2;

// This constant holds an arrow function assigned to the 'multiplyNumbers' constant, retrieving input values and updating the result in the DOM.
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

// Adding a click event listener to the 'Multiply Numbers' button, triggering the 'multiplyNumbers' function.
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Your Choice */

/* Division Feature */
// This function divides 'dividend' by 'divisor', handling division by zero.
function divide(dividend, divisor) {
    if (divisor !== 0) {
        return dividend / divisor;
    } else {
        return "Cannot divide by zero";
    }
}

// This function retrieves input values, divides them using the 'divide' function, and updates the result in the DOM.
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Adding a click event listener to the 'Divide Numbers' button, triggering the 'divideNumbers' function.
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Selection Structures */

// Adding a click event listener to the 'Get Total' button, calculating the total due based on subtotal and membership status, and updating the result in the DOM.
document.querySelector('#getTotal').addEventListener('click', function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isClubMember = document.querySelector('#member').checked;

    let discount = isClubMember ? 0.2 : 0;
    let totalDue = subtotal - subtotal * discount;

    document.querySelector('#total').innerHTML = `$${totalDue.toFixed(2)}`;
});

/* Array Methods - Functional Programming */

// An array of numbers from 1 to 13.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Displaying the array in the DOM.
document.querySelector('#array').innerHTML = numbersArray;

/* Find Odds */
// Displaying the odd numbers from the array in the DOM.
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Find Evens */
// Displaying the even numbers from the array in the DOM.
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Sum of Array */
// Displaying the sum of all numbers in the array in the DOM.
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

/* Multiply by 2 */
// Displaying a new array where each number is multiplied by 2 in the DOM.
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Sum of Multiplied by 2 */
// Displaying the sum of all numbers in the new array (multiplied by 2) in the DOM.
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);