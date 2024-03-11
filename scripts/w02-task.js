const fullName = "Dominic Emilio Clemence";
let currentYear = new Date().getFullYear();
let profilePicture = "images/DominicReal.png"; // Replace 'yourprofileimagename.png' with your actual image file name

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("main img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Pasta", "Ice Cream", "Salad", "Rice Pilaf", "Donuts"];
foodElement.textContent = favoriteFoods.join(', ');

const newFavoriteFood = "Pizza";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;


