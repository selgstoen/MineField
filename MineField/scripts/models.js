define(["require", "exports", "bombservice", "knockout"], function(require, exports, bs, ko) {
    //export function cell(rowNumber: number, columnNumber: number) {
    //    var self = this;
    //    self.rowNumber = rowNumber;
    //    self.columnNumber = columnNumber;
    //    self.isBomb = false;
    //    self.numberOfCloseBombs = 0;
    //}
    function row(rowNumber, columnCount) {
        var self = this;
        self.cells = ko.observableArray();

        for (var cellNr = 0; cellNr < columnCount; cellNr++) {
            //self.cells.push('row #' + rowNumber + 'cell #' + cellNr);
            self.cells.push(new exports.cell(rowNumber, cellNr));
        }
    }
    exports.row = row;

    function cell(rowNumber, columnNumber) {
        var self = this;
        self.rowNumber = rowNumber;
        self.columnNumber = columnNumber;
        self.isBomb = false;
        self.numberOfCloseBombs = 0;
    }
    exports.cell = cell;

    function field(rowCount, columnCount, numberOfBombs) {
        var self = this;
        self.rows = ko.observableArray();
        self.bombPositions = bs.getBombPositions(numberOfBombs);

        for (var rowNr = 0; rowNr < rowCount; rowNr++) {
            self.rows.push(new exports.row(rowNr, columnCount));
        }
    }
    exports.field = field;
});
//# sourceMappingURL=models.js.map
