import ko = require("knockout");

function field(rowCount: number, columnCount: number) {
    var self = this;
    self.rows = ko.observableArray();

    for (var i = 0; i < columnCount; i++) {
        self.rows.push(i);
    }
}

var viewModel = function () {
    var self = this;

    self.name = "Mine Field";
    self.field = new field(10, 10);
}

    ko.applyBindings(new viewModel); 