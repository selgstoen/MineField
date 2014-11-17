define(["require", "exports", "knockout", "models", "bombservice", "displayservice", "flipservice"], function(require, exports, ko, models, bombService, displayService, flipService) {
    var viewModel = function () {
        var self = this;
        var graph = Raphael(100, 100, 10000, 10000);
        var clock = Raphael(100, 10, 1000, 100);
        var bombPositions = bombService.getBombPositions(10, 10, 10);
        self.timer = new models.timer(clock);
        self.name = "Mine Field";
        self.field = new models.field(10, 10, bombPositions);
        for (var i = 0; i < self.field.rows().length; i++) {
            bombService.decorateCellsOnRow(self.field.rows()[i], bombPositions);
            displayService.printRow(graph, self.field.rows()[i], flippedCell);
        }
        ;

        function flippedCell(e) {
            var cell = e.target.param;
            if (e.button === 2) {
                cell.markBomb();
            } else {
                if (!self.timer.running) {
                    self.timer.start();
                }
                if (cell.flip()) {
                    flipService.flipAroundCell(cell, self.field);
                }
            }
        }
    };
    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
