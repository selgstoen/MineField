define(["require", "exports", "knockout", "models", "bombservice"], function(require, exports, ko, models, bs) {
    var viewModel = function () {
        var self = this;

        var bombPositions = bs.getBombPositions(10, 10, 5);
        self.name = "Mine Field";
        self.field = new models.field(10, 10, bombPositions);
    };

    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
