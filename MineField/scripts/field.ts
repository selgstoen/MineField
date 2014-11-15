
import ko = require("knockout");
import models = require("models");
import bs = require("bombservice");
import ds = require("displayservice");
import fs = require("flipservice");

var viewModel = function () {
    var self = this;
    var graph = Raphael(10, 10, 10000, 10000);
    var bombPositions = bs.getBombPositions(10, 10, 10);
    self.name = "Mine Field";
    self.field = new models.field(10, 10, bombPositions);
    for (var i = 0; i < self.field.rows().length; i++) {
        bs.decorateCellsOnRow(self.field.rows()[i], bombPositions);
        ds.printRow(graph, self.field.rows()[i], flippedCell);
    };

    function flippedCell(e) {
        var cell = e.target.param;
        if (cell.flip()) {
            fs.flipAroundCell(cell, self.field);
        }
    }
}
 ko.applyBindings(new viewModel); 