// Javascript for Date, City, State, Country, Shape filter
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

// Adding rows of data to table
data.forEach(sighting =>
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


// Create event handlers
button.on("click", searchDates);
form.on("submit", searchDates);

// Event handler function
function searchDates() {

  d3.event.preventDefault();

  // Start with a full table
  tbody.html("");
  data.forEach(sighting =>
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

  // Getting a reference to the input
  var dateInput = d3.select("#datetime").node().value;
  var cityInput = d3.select("#city").node().value;
  var stateInput = d3.select("#state").node().value;
  var countryInput = d3.select("#country").node().value;
  var shapeInput = d3.select("#shape").node().value;

  // Create list of dictionaries to hold inputs and fields
  var fullFilter = [
    {"field" : "datetime", "inputValue" : dateInput},
    {"field" : "city", "inputValue" : cityInput},
    {"field" : "state", "inputValue" : stateInput},
    {"field" : "country", "inputValue" : countryInput},
    {"field" : "shape", "inputValue" : shapeInput},
  ];

  // Create a deep copy of Data
  var newData = [...data];

  // Use foreach to filter for each input
  fullFilter.forEach(input => {
      if (input.inputValue !== "") {
        newData = newData.filter(sighting => sighting[input.field] === input.inputValue.toLowerCase());
      }
    }
  );


  // Create new table
  tbody.html("");
  newData.forEach(sighting =>
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
