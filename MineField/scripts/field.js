define(["require", "exports", "knockout"], function(require, exports, ko) {
    function row(rowNumber, columnCount) {
        var self = this;
        self.cells = ko.observableArray();

        for (var cellNr = 0; cellNr < columnCount; cellNr++) {
            self.cells.push('row #' + rowNumber + 'cell #' + cellNr);
        }
    }

    function field(rowCount, columnCount) {
        var self = this;
        self.rows = ko.observableArray();

        for (var rowNr = 0; rowNr < rowCount; rowNr++) {
            self.rows.push(new row(rowNr, columnCount));
        }
    }

    var viewModel = function () {
        var self = this;

        self.name = "Mine Field";
        self.field = new field(10, 10);
    };

    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
