define(["require", "exports", "knockout", "models"], function(require, exports, ko, models) {
    var viewModel = function () {
        var self = this;

        self.name = "Mine Field";
        self.field = new models.field(10, 10, 5);
    };

    ko.applyBindings(new viewModel);
});
//# sourceMappingURL=field.js.map
