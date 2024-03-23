let myProfile = { // Starting with a  profile object
  name: "Dominic Emilio Clemence", // Setting the name property to "Dominic Emilio Clemence"
  photo: "images/DominicReal.png", // Putting the path to the photo
  favoriteFoods: [ // The favorite foods
    'Pizza',
    'Ice Cream',
    'Breakfast Cereal'
  ],
  hobbies: [ // Time to list out the hobbies
    'Guitar',
    'Hiking',
    'Traveling'
  ],
  placesLived: [] // Let's prepare a list of places  lived
};

myProfile.placesLived.push({ // Adding the first place lived
  place: "USA, California", // California dreamin', huh?
  length: "40 years" // That's quite a long time!
});

myProfile.placesLived.push({ // Adding another place lived
  place: "Italy, Rome", // Ah, the eternal city!
  length: "7 years" // Living the dolce vita for 7 years, nice!
});

myProfile.placesLived.push({ // Adding yet another place lived
  place: "Colombia, Antioquia",
  length: "10 years"
});

document.querySelector('#name').textContent = myProfile.name; // Setting the name on the webpage
document.querySelector('#photo').src = myProfile.photo; // Showing the photo
document.querySelector('#photo').alt = myProfile.name; // Providing a fallback name for the photo

myProfile.favoriteFoods.forEach((food) => { // Listing out the favorite foods
  let li = document.createElement('li'); // Creating a list item
  li.textContent = food; // Setting the food item
  document.querySelector('#favorite-foods').appendChild(li); // Adding it to the list
});

myProfile.hobbies.forEach((hobby) => { // Listing out thge hobbies
  let li = document.createElement('li'); // Creating a list item
  li.textContent = hobby; // Setting the hobby
  document.querySelector('#hobbies').appendChild(li); // Adding it to the list
});

myProfile.placesLived.forEach((place) => { // Listing out the places lived
  let dt = document.createElement('dt'); // Creating a term
  dt.textContent = place.place; // Setting the place
  let dd = document.createElement('dd'); // Creating a description
  dd.textContent = place.length; // Setting the duration
  document.querySelector('#places-lived').appendChild(dt); // Adding the place
  document.querySelector('#places-lived').appendChild(dd); // Adding the duration
});