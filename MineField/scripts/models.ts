import bs = require("bombservice");
import ko = require("knockout");

export function row(rowNumber: number, columnCount: number) {
    var self = this;
    self.cells = ko.observableArray();

    for (var cellNr = 0; cellNr < columnCount; cellNr++) {
        self.cells.push('row #' + rowNumber + 'cell #' + cellNr);
    }
}

export function field(rowCount: number, columnCount: number, numberOfBombs: number) {
    var self = this;
    self.rows = ko.observableArray();
    self.bombPositions = bs.getBombPositions(numberOfBombs);


    for (var rowNr = 0; rowNr < rowCount; rowNr++) {
        self.rows.push(new row(rowNr, columnCount));
    }
}