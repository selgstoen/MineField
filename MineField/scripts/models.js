define(["require", "exports", "knockout"], function(require, exports, ko) {
    function bombPosition(rowIndex, columnIndex) {
        var self = this;
        self.rowIndex = rowIndex;
        self.columnIndex = columnIndex;
    }
    exports.bombPosition = bombPosition;

    function row(rowNumber, columnCount) {
        var self = this;
        self.cells = ko.observableArray();

        for (var cellNr = 0; cellNr < columnCount; cellNr++) {
            //var paper = Raphael(10, 50, 320, 200);
            //var circle = paper.circle(50, 40, 10);
            //circle.attr("fill", "#f00");
            //circle.attr("stroke", "#fff");
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
        self.displayValue = rowNumber + ' - ' + columnNumber;
        self.square = ko.observable;
        self.label = ko.observable;
    }
    exports.cell = cell;

    function field(rowCount, columnCount, bombPositions) {
        var self = this;
        self.rows = ko.observableArray();
        self.bombPostions = bombPositions;

        for (var rowNr = 0; rowNr < rowCount; rowNr++) {
            self.rows.push(new exports.row(rowNr, columnCount));
        }
    }
    exports.field = field;
});
//# sourceMappingURL=models.js.map
