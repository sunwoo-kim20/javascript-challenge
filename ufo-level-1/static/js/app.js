// Javascript for date filter
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

// Create function for appending table rows
function createTable(inputData) {
  inputData.forEach(sighting =>
    {var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(titleCase(sighting.city));
    row.append("td").text(sighting.state.toUpperCase());
    row.append("td").text(sighting.country.toUpperCase());
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);
    }
  );
}

// Adding rows of data to table
createTable(data);


// Create event handlers
button.on("click", searchDates);
form.on("submit", searchDates);

// Event handler function
function searchDates() {

  // Preventing page from refreshing with each search
  d3.event.preventDefault();

  // Start with a full table
  tbody.html("");
  createTable(data);

  // Getting a reference to the input
  var input = d3.select("#datetime").node().value;
  console.log(input);

  // Filter original data
  var newData = data.filter(sighting => sighting.datetime === input);

  // Clear old table
  tbody.html("");
  // Create new table
  createTable(newData);
}
