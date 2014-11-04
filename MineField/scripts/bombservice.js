define(["require", "exports", "models"], function(require, exports, models) {
    function decorateCellsOnRow(row, bombPositions) {
        var decorateCell = function (cell) {
            var rowNumber = cell.rowNumber;
            var colNumber = cell.columnNumber;
            var isBomb = false;

            for (var j = 0; j < bombPositions.length; j++) {
                if (bombPositions[j].rowIndex == rowNumber && bombPositions[j].columnIndex == colNumber) {
                    isBomb = true;
                    continue;
                }

                if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber - 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }
                if (bombPositions[j].rowIndex == rowNumber && bombPositions[j].columnIndex == colNumber - 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }
                if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber - 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }

                if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber) {
                    cell.numberOfCloseBombs++;
                    continue;
                }
                if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber) {
                    cell.numberOfCloseBombs++;
                    continue;
                }

                if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber + 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }
                if (bombPositions[j].rowIndex == rowNumber && bombPositions[j].columnIndex == colNumber + 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }
                if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber + 1) {
                    cell.numberOfCloseBombs++;
                    continue;
                }

                if (isBomb) {
                    cell.displayValue = 'B';
                } else {
                    cell.displayValue = cell.numberOfCloseBombs;
                }
            }
        };

        for (var i = 0; i < row.cells().length; i++) {
            decorateCell(row.cells()[i]);
        }
    }
    exports.decorateCellsOnRow = decorateCellsOnRow;

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
            return Math.floor(Math.random() * rangeEnd);
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
            }
        }

        return bombPositions;
    }
    exports.getBombPositions = getBombPositions;

    function printRow(row) {
        var printCell = function (cell) {
            var x = cell.rowNumber * 100;
            var y = cell.columnNumber * 100;
            var paper = Raphael(10, 50, 10000, 10000);
            var rect = paper.rect(x, y, 100, 100);
            rect.attr("fill", "green");
            rect.attr("stroke", "#fff");
            var label = paper.text(x + 50, y + 50, cell.displayValue);
            label.attr("fill", "black");
            label.attr("font-size", "20");
        };

        for (var i = 0; i < row.cells().length; i++) {
            printCell(row.cells()[i]);
        }
    }
    exports.printRow = printRow;
});
//# sourceMappingURL=bombservice.js.map
