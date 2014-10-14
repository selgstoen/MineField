define(["require", "exports", "models"], function(require, exports, models) {
    function getBombPositions(numberOfBombs, numberOfRows, numberOfCoumns) {
        var bombPositions = [];

        var bombPositionAlreadyExists = function (position) {
            for (var i = 0; i < bombPositions.length; i++) {
                var existingBombPosition = bombPositions[i];
                if (existingBombPosition.rowIndex == position.rowIndex && existingBombPosition.columnIndex == position.columnIndex)
                    return true;
            }

            return false;
        };

        var getRandomIndex = function (rangeEnd) {
            return Math.floor(Math.random() * rangeEnd + 1);
        };

        var getBombPosition = function (rowCount, columnCount) {
            var rowIndex = getRandomIndex(rowCount);
            var columnIndex = getRandomIndex(columnCount);
            return new models.bombPosition(rowIndex, columnIndex);
        };

        while (bombPositions.length < numberOfBombs) {
            var bombPosition = getBombPosition(numberOfRows, numberOfCoumns);
            if (!bombPositionAlreadyExists(bombPosition)) {
                bombPositions.push(bombPosition);
            } else {
                break;
            }
        }

        return bombPositions;
    }
    exports.getBombPositions = getBombPositions;
});
//# sourceMappingURL=bombservice.js.map
