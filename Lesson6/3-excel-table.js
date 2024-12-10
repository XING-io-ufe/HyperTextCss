// Function to handle file input change
document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0]; // Get the uploaded file
    if (!file) {
        return; // Exit if no file is selected
    }

    const reader = new FileReader(); // Create a FileReader object

    // Define what happens when the file is read
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result); // Read the file as an array
        const workbook = XLSX.read(data, { type: 'array' }); // Parse the Excel file

        // Get the first sheet name
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName]; // Get the first sheet

        // Convert the sheet to JSON format
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Use header: 1 to get an array of arrays

        // Render the data in the table
        renderTable(jsonData);
    };

    reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
}

// Function to render the table
function renderTable(data) {
    const table = document.getElementById('dataTable');
    table.innerHTML = ''; // Clear any existing content

    // Loop through the data and create table rows and cells
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement('tr'); // Create a new row
        for (let j = 0; j < data[i].length; j++) {
            const cell = document.createElement('td'); // Create a new cell
            cell.textContent = data[i][j]; // Set the cell's text
            row.appendChild(cell); // Append the cell to the row
        }
        table.appendChild(row); // Append the row to the table
    }
}