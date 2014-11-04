
import ko = require("knockout");
import models = require("models");
import bs = require("bombservice");
//import raphael = require("raphael");


var viewModel = function () {
    var self = this;

    var bombPositions = bs.getBombPositions(10, 10, 10);
    self.name = "Mine Field";
    self.field = new models.field(10, 10, bombPositions);
    for (var i = 0; i < self.field.rows().length; i++) {
        bs.decorateCellsOnRow(self.field.rows()[i], bombPositions);
    };

    // Creates canvas 320 × 200 at 10, 50
    var paper = Raphael(10, 50, 320, 200);

    // Creates circle at x = 50, y = 40, with radius 10
    var circle = paper.circle(50, 40, 10);
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#f00");

    // Sets the stroke attribute of the circle to white
    circle.attr("stroke", "#fff");
}

    ko.applyBindings(new viewModel); 