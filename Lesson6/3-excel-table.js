document.getElementById("demoA").onchange = evt => {
    // (A) NEW FILE READER
    var reader = new FileReader();

    // (B) ON FINISH LOADING
    reader.addEventListener("loadend", evt => {
        // (B1) GET HTML TABLE
        var table = document.getElementById("demoB");
        table.innerHTML = "";

        // (B2) GET THE FIRST WORKSHEET
        var workbook = XLSX.read(evt.target.result, { type: "binary" }),
            worksheet = workbook.Sheets[workbook.SheetNames[0]],
            range = XLSX.utils.decode_range(worksheet["!ref"]);

        // (B3) READ EXCEL CELLS & INSERT ROWS/COLUMNS
        for (let row = range.s.r; row <= range.e.r; row++) {
            let r = table.insertRow();
            for (let col = range.s.c; col <= range.e.c; col++) {
                let c = r.insertCell(),
                    xcell = worksheet[XLSX.utils.encode_cell({ r: row, c: col })];
                c.innerHTML = xcell.v;
            }
        }
    });

    // (C) START - READ SELECTED EXCEL FILE
    reader.readAsArrayBuffer(evt.target.files[0]);
};