define(["require", "exports", "knockout", "models", "flipservice", "bombservice", "displayservice"], function(require, exports, ko, models, flipService, bombService, displayService) {
    var viewModel = function () {
        var self = this;

        var graph = Raphael(0, 0, 1500, 1500);
        self.background = new models.background(graph);
        self.watch = new models.watch(graph);
        self.score = new models.score(graph, 15, 12 * 12);
        self.game = new models.game(graph);
        self.name = "Mine Field";

        var bombPositions = bombService.getBombPositions(15, 12, 12);
        self.field = new models.field(12, 12, bombPositions);
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
                if (!self.watch.running) {
                    self.watch.start();
                }
                if (cell.isBomb) {
                    cell.flip();
                    self.watch.stop();
                    self.game.displayGameOver();
                    return;
                }
                if (cell.flip()) {
                    flipService.flipAroundCell(cell, self.field);
                }
            }

            self.score.setpoints(self.field.getNumberOfFlipped());
        }
    };
    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
