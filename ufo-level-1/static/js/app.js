// Title case function
function titleCase(str) {
  return str.toLowerCase().split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Getting a reference to the table body
var tbody = d3.select("tbody");

// Getting a reference to the form
var form = d3.select("#form");

// Getting a reference to the button
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click", searchDates);
form.on("submit", searchDates);

// Event handler function
function searchDates() {

  d3.event.preventDefault();

  // Getting a reference to the input
  var input = d3.select("#datetime").node().value;
  console.log(input);
}
