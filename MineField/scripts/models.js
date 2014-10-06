define(["require", "exports", "bombservice", "knockout"], function(require, exports, bs, ko) {
    function row(rowNumber, columnCount) {
        var self = this;
        self.cells = ko.observableArray();

        for (var cellNr = 0; cellNr < columnCount; cellNr++) {
            self.cells.push('row #' + rowNumber + 'cell #' + cellNr);
        }
    }
    exports.row = row;

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
