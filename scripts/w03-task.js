/* LESSON 3 - Programming Tasks */

/* Function Declaration */

/*  Addition Feature */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression */

/*  Subtraction Feature */
var subtract = function (number1, number2) {
    return number1 - number2;
};

var subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Functions */

/*  Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Your Choice */

/*  Division Feature */
function divide(dividend, divisor) {
    if (divisor !== 0) {
        return dividend / divisor;
    } else {
        return "Cannot divide by zero";
    }
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Selection Structures */

document.querySelector('#getTotal').addEventListener('click', function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isClubMember = document.querySelector('#member').checked;

    let discount = isClubMember ? 0.2 : 0;
    let totalDue = subtotal - subtotal * discount;

    document.querySelector('#total').innerHTML = `$${totalDue.toFixed(2)}`;
});

/* Array Methods - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = numbersArray;

/* Find Odds */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Find Evens */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Sum of Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

/* Multiply by 2 */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Sum of Multiplied by 2 */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);



