define(["require", "exports", "knockout"], function(require, exports, ko) {
    function field(rowCount, columnCount) {
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
    };

    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
