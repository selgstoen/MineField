define(["require", "exports", "knockout", "models", "bombservice", "displayservice", "flipservice"], function(require, exports, ko, models, bs, ds, fs) {
    var viewModel = function () {
        var self = this;
        var graph = Raphael(10, 10, 10000, 10000);
        var bombPositions = bs.getBombPositions(10, 10, 10);
        self.name = "Mine Field";
        self.field = new models.field(10, 10, bombPositions);
        for (var i = 0; i < self.field.rows().length; i++) {
            bs.decorateCellsOnRow(self.field.rows()[i], bombPositions);
            ds.printRow(graph, self.field.rows()[i], flippedCell);
        }
        ;

        function flippedCell(e) {
            var cell = e.target.param;
            fs.flipAroundCell(cell, self.field);
        }
    };
    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
