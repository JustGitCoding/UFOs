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
