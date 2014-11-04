define(["require", "exports", "knockout", "models", "bombservice"], function(require, exports, ko, models, bs) {
    var viewModel = function () {
        var self = this;
        var graph = Raphael(10, 10, 10000, 10000);
        var bombPositions = bs.getBombPositions(10, 10, 10);
        self.name = "Mine Field";
        self.field = new models.field(10, 10, bombPositions);
        for (var i = 0; i < self.field.rows().length; i++) {
            bs.decorateCellsOnRow(self.field.rows()[i], bombPositions);
            bs.printRow(graph, self.field.rows()[i]);
        }
        ;
    };
    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
