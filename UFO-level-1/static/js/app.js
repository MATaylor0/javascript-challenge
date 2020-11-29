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
var form = d3.select("form-control");

// Setting up event listeners to run the filter function
button.on("click", runFilter);
form.on("submit", runFilter);

// Defining a filter function
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter the data to find elements that match the user input
    var filteredData = tableData.filter(row => row.datetime === inputValue);

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