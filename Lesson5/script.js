document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const lastName = document.getElementById("lastName").value;
  const firstName = document.getElementById("firstName").value;
  const age = document.getElementById("age").value;

  // Create a new row in the table
  const table = document.querySelector("table");
  const newRow = table.insertRow(-1); // Insert at the end of the table
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  // Fill the new row with data
  cell1.innerHTML = table.rows.length - 1; // Number based on current row count
  cell2.innerHTML = lastName;
  cell3.innerHTML = firstName;
  cell4.innerHTML = age;
  cell5.innerHTML =
    '<a href="#" onclick="deleteRow(this)"><img src="./icon.avif" width="25px" height="25px"></a>';

  // Clear the form
  this.reset();
});

// Function to delete a row
function deleteRow(link) {
  const row = link.parentNode.parentNode; // Get the row of the clicked link
  row.parentNode.removeChild(row); // Remove the row from the table
}
