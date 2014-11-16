
import ko = require("knockout");
import models = require("models");
import bombService = require("bombservice");
import displayService = require("displayservice");
import flipService = require("flipservice");
//import timeServie = require("timeservice");

var viewModel = function () {
    var self = this;
    var graph = Raphael(100, 100, 10000, 10000);
    var bombPositions = bombService.getBombPositions(10, 10, 10);
    self.timer = new models.timer();
    self.name = "Mine Field";
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
        if (!self.timer.running) {
            self.timer.start();
        }
            if (cell.flip()) {
                flipService.flipAroundCell(cell,  self.field);
                
            }
        }
    }
}
 ko.applyBindings(new viewModel); 