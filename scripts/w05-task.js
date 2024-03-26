/* declare some things */
const templesElement = document.getElementById("temples"); // This is where we'll display temple info
let templeList = []; // We'll store temple data here

/* Here comes the function to show temples */
const displayTemples = (temples) => {
  temples.forEach(temple => {
    const article = document.createElement("article"); // Let's create an article for each temple
    const h3 = document.createElement("h3"); // Adding a title
    h3.textContent = temple.templeName; // Temple's name as the title
    const img = document.createElement("img"); // An image element
    img.src = temple.imageUrl; // Image source is the temple's image URL
    img.alt = temple.location; // Alt text is the temple's location
    article.appendChild(h3); // Let's put the title in the article
    article.appendChild(img); // And the image too
    templesElement.appendChild(article); // Finally, add the article to our temples section
  });
}

/* Now let's get some temple data */
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Let's get the temple data
  templeList = await response.json(); // Convert the response to JSON and store it in our templeList
  displayTemples(templeList); // Let's display those temples!
}

/* Let's clean up our temple display */
const reset = () => {
  templesElement.innerHTML = ""; // Clear out the existing temple info
}

/* Filter the temples based on user's choice */
const filterTemples = (temples) => {
  reset(); // Clean up what we have
  const filter = document.getElementById("filtered").value; // Get the user's selected filter
  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah"))); // Show only Utah temples
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah"))); // Show temples outside Utah
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1))); // Show older temples
      break;
    case "all":
    default:
      displayTemples(temples); // Show all temples by default
  }
}

/* Listen for any changes in filter and update accordingly */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples(); // Get the temples
