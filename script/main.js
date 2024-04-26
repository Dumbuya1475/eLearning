function addColumn() {
    var table = document.getElementById("timetable");
    var headerRow = table.rows[0];
    var numColumns = headerRow.cells.length;

    var newCell = headerRow.insertCell(numColumns);
    newCell.innerHTML = "<input type='time'>";

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var newCell = row.insertCell(numColumns);
        newCell.innerHTML[1] = "<input type='range' style='border:1px solid #3333' placeholder='Subject'>";
        newCell.innerHTML = "<input type='text' style='border:1px solid #3333' placeholder='Subject' background='red'>";
    }
}

function addRow() {
    var table = document.getElementById("timetable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(-1);
    var numColumns = table.rows[0].cells.length;

    for (var i = 0; i < numColumns; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = "<input type='text' style='border:1px solid #3333' placeholder='top'>";
    }
}
