define(["require", "exports", "knockout", "models", "bombservice"], function (require, exports, ko, models, bombService) {
    var viewModel = function () {
        var self = this;
        var rows = 6;
        var cols = 13;
        //var graph = Raphael(0, 0, 1500, 1500);
        //self.background = new models.background(graph);
        //self.watch = new models.watch(graph);
        //self.score = new models.score(graph, 15, rows * cols);
        //self.game = new models.game(graph);
        self.name = "Mine Field 2.0";
        var bombPositions = bombService.getBombPositions(15, rows, cols);
        self.field = new models.field(rows, cols, bombPositions);
        //for (var i = 0; i < self.field.rows().length; i++) {
        //    bombService.decorateCellsOnRow(self.field.rows()[i], bombPositions);
        //    displayService.printRow(graph, self.field.rows()[i], flippedCell);
        //};
        //function flippedCell(e) {
        //    var cell = e.target.param;
        //    if (e.button === 2) {
        //        cell.markBomb();
        //    } else {
        //    if (!self.watch.running) {
        //        self.watch.start();
        //    }
        //    if (cell.isBomb) {
        //        cell.flip();
        //        self.watch.stop();
        //        self.game.displayGameOver();
        //        return;
        //    }
        //    if (cell.flip()) {
        //            flipService.flipAroundCell(cell,  self.field);
        //        }
        //    }
        //    self.score.setpoints(self.field.getNumberOfFlipped());
        //}
    };
    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map