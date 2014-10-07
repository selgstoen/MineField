define(["require", "exports", "models"], function(require, exports, models) {
    function getBombPositions(numberOfBombs, numberOfRows, numberOfCoumns) {
        var bombPositions = [];

        for (var i = 0; i < numberOfBombs; i++) {
            bombPositions.push(new models.bombPosition(i, i));
        }

        return bombPositions;
    }
    exports.getBombPositions = getBombPositions;
});
//# sourceMappingURL=bombservice.js.map
