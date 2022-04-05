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

//   ###### RETIRE handleClick Function and filter when "enter" is pressed
// // function to rebuild a filtered table if a date is entered as a filter criteria
// function handleClick() {
//     // grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
//     // check to see if a date was entered and filter the data using that date
//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };
//     // rebuild the table using the filtered version of the data
//     // @NOTE: if no date was entered, then filteredData will just be the original tableData
//     buildTable(filteredData);
// }
// use D3 to 'listen' for an event (in this case, the 'click' of our filtering button)
// d3.selectAll("#filter-btn").on("click", handleClick);

// 1. Create a variable to keep track of all the filters as an object.
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property('value');
    console.log(elementValue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr('id');
    console.log(filterId);
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();

}
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
}
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// At the bare minimum - show the base table before users have an oppty to input any filter criteria
buildTable(tableData);