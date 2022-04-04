// import data from data.js
const tableData = data;

// Reference the HTML table using D3 (JavaScript library which produces sophisticated and highly dymanic graphs in an HTML webpage)
var tbody = d3.select("tbody");

// Function to create a table to display all of the UFO sightings
function buildTable(data) {
    // At the start of our function, clear out any existing data (like a "reset")
    tbody.html("");
    // loop through each object in the data & append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        // loop through each field in the row and add each value as a table cell (table data or 'td')
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });
    });
}

// function to rebuild a filtered table if a date is entered as a filter criteria
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if a date was entered and filter the data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered version of the data
    // @NOTE: if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
}

// use D3 to 'listen' for an event (in this case, the 'click' of our filtering button)
d3.selectAll("#filter-btn").on("click", handleClick);

// At the bare minimum - show the base table before users have an oppty to input any filter criteria
buildTable(tableData);