let currentId = 1;
function myFunction() {
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = currentId++;
    cell2.innerHTML = document.getElementById("lastName").value; // Fixed ID to match HTML
    cell3.innerHTML = document.getElementById("firstName").value; // Fixed ID to match HTML
    cell4.innerHTML = document.getElementById("age").value;
    cell5.innerHTML = "<a href='' onclick='cancelRow(this)'><img src='./icon.avif' width='25px' height='25px' alt=''></a>"; // Add a button to cancel
}

function cancelRow(a) {
    var row = button.parentNode.parentNode; // Get the row of the button
    row.parentNode.removeChild(row); // Remove the row from the table
    currentId--;
}