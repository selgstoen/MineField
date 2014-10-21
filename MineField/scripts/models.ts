import ko = require("knockout");

export function bombPosition(rowIndex: number, columnIndex: number) {
    var self = this;
    self.rowIndex = rowIndex;
    self.columnIndex = columnIndex;
}

export function row(rowNumber: number, columnCount: number) {
    var self = this;
    self.cells = ko.observableArray();

    for (var cellNr = 0; cellNr < columnCount; cellNr++) {
        self.cells.push(new cell(rowNumber, cellNr));
    }
}

export function cell(rowNumber: number, columnNumber: number) {
    var self = this;
    self.rowNumber = rowNumber;
    self.columnNumber = columnNumber;
    self.isBomb = false;
    self.numberOfCloseBombs = 0;
    self.displayValue = rowNumber + ' - ' + columnNumber;
}

export function field(rowCount: number, columnCount: number, bombPositions: any) {
    var self = this;
    self.rows = ko.observableArray();
    self.bombPostions = bombPositions;
    
    for (var rowNr = 0; rowNr < rowCount; rowNr++) {
        self.rows.push(new row(rowNr, columnCount));
    }
}

