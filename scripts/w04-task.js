let myProfile = {
  name: "Dominic Emilio Clemence", // Assigning name property with value "Dominic Emilio Clemence"
  photo: "images/DominicReal.png", // Assigning photo property with image path "images/DominicReal.png"
  favoriteFoods: [
    'Pizza', // Adding 'Pizza' to the favoriteFoods array
    'Ice Cream', // Adding 'Ice Cream' to the favoriteFoods array
    'Breakfast Cereal' // Adding 'Breakfast Cereal' to the favoriteFoods array
  ],
  hobbies: [
    'Guitar', // Adding 'Guitar' to the hobbies array
    'Hiking', // Adding 'Hiking' to the hobbies array
    'Traveling' // Adding 'Traveling' to the hobbies array
  ],
  placesLived: [ // Initializing placesLived array
    {
      place: 'USA', // Adding USA as a place in placesLived
      length: '40 years' // Adding the length of residence in USA
    },
    {
      place: 'Colombia', // Adding Colombia as a place in placesLived
      length: '10 years' // Adding the length of residence in Colombia
    },
    {
      place: 'Italy', // Adding Italy as a place in placesLived
      length: '7 years' // Adding the length of residence in Italy
    }
  ]
};

// DOM Manipulation
document.getElementById('name').textContent = myProfile.name; // Setting the text content of element with ID 'name' to the name property of myProfile

let photoElement = document.getElementById('photo'); // Getting reference to the element with ID 'photo'
photoElement.src = myProfile.photo; // Setting the src attribute of the 'img' element with ID 'photo' to the photo property of myProfile
photoElement.alt = myProfile.name + "'s Photo"; // Setting the alt attribute of the 'img' element with ID 'photo' to include the name

myProfile.favoriteFoods.forEach(food => { // Looping through each item in favoriteFoods array
  let li = document.createElement('li'); // Creating a new 'li' element
  li.textContent = food; // Setting the text content of the 'li' element to the current item in favoriteFoods array
  document.getElementById('favorite-foods').appendChild(li); // Appending the 'li' element to the 'ul' with ID 'favorite-foods'
});

myProfile.hobbies.forEach(hobby => { // Looping through each item in hobbies array
  let li = document.createElement('li'); // Creating a new 'li' element
  li.textContent = hobby; // Setting the text content of the 'li' element to the current item in hobbies array
  document.getElementById('hobbies').appendChild(li); // Appending the 'li' element to the 'ul' with ID 'hobbies'
});

myProfile.placesLived.forEach(place => { // Looping through each item in placesLived array
  let dt = document.createElement('dt'); // Creating a new 'dt' element
  dt.textContent = place.place; // Setting the text content of the 'dt' element to the place property of the current item in placesLived array
  let dd = document.createElement('dd'); // Creating a new 'dd' element
  dd.textContent = place.length; // Setting the text content of the 'dd' element to the length property of the current item in placesLived array
  let dl = document.getElementById('places-lived'); // Getting reference to the 'dl' element with ID 'places-lived'
  dl.appendChild(dt); // Appending the 'dt' element to the 'dl' element
  dl.appendChild(dd); // Appending the 'dd' element to the 'dl' element
});