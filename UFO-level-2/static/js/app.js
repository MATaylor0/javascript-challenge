// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Writing all of the data into the table
tableData.forEach((x) => {
    var row = tbody.append("tr");

    Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Using D3 to select the form and the button elements
var button = d3.select("#filter-btn");

// Setting up event listeners to run the filter function
button.on("click", runFilter);

// Defining a filter function
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Setting up variables to hold the values in the filters and the corresponding ID
    var filters = [];
    var filter_ids = ["datetime", "city", "state", "country", "shape"];

    // The current value in each field and storing in array
    for (var i = 0; i < 5; i++) {
        var inputElement = d3.select(`#${filter_ids[i]}`);
        filters.push(inputElement.property("value"));
    };

    // Defining a new variable to hold the data to be filtered
    var filteredData = tableData;

    // Filter the data based on all of the filters found
    for (var i = 0; i < 5; i++) {
        if (filters[i] !== "") {
            filteredData = filteredData.filter(row => row[filter_ids[i]] === filters[i]);
        }
    };

    // Selecting the table element
    var tbody = d3.select("tbody");

    // Removing any existing information
    tbody.html("");

    // Writing the filtered data into the table
    filteredData.forEach((x) => {
        var row = tbody.append("tr");

        Object.entries(x).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};