
import ko = require("knockout");
import models = require("models");
import bombService = require("bombservice");
import displayService = require("displayservice");
import flipService = require("flipservice");

var viewModel = function () {
    var self = this;

    var graph = Raphael(0, 0, 1500, 1500);
    self.background = new models.background(graph);
    self.watch = new models.watch(graph);
    self.score = new models.score(graph);
    self.game = new models.game(graph);
    self.name = "Mine Field";

    var bombPositions = bombService.getBombPositions(10, 10, 10);
    self.field = new models.field(10, 10, bombPositions);
    for (var i = 0; i < self.field.rows().length; i++) {
        bombService.decorateCellsOnRow(self.field.rows()[i], bombPositions);
        displayService.printRow(graph, self.field.rows()[i], flippedCell);
    };

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
            return;
        }
        if (cell.flip()) {
                flipService.flipAroundCell(cell,  self.field);
            }
        }

        self.score.setpoints(self.field.getNumberOfFlipped());
    }
}
 ko.applyBindings(new viewModel); 