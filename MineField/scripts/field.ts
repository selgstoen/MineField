import ko = require("knockout");

function row(rowNumber: number, columnCount: number) {
    var self = this;
    self.cells = ko.observableArray();

    for (var cellNr = 0; cellNr < columnCount; cellNr++) {
        self.cells.push('row #' + rowNumber + 'cell #' + cellNr);
    }
}

function field(rowCount: number, columnCount: number) {
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
}

    ko.applyBindings(new viewModel); 