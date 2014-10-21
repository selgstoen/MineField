define(["require", "exports", "knockout", "models", "bombservice"], function(require, exports, ko, models, bs) {
    var viewModel = function () {
        var self = this;

        var bombPositions = bs.getBombPositions(10, 10, 10);
        self.name = "Mine Field";
        self.field = new models.field(10, 10, bombPositions);
        for (var i = 0; i < self.field.rows().length; i++) {
            bs.decorateCellsOnRow(self.field.rows()[i], bombPositions);
        }
        ;
    };

    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
