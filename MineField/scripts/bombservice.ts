import models = require("models");

export function decorateCellsOnRow(row, bombPositions) {

    var decorateCell = function (cell) {
        var rowNumber = cell.rowNumber;
        var colNumber = cell.columnNumber;
        var isBomb = false;

        for (var j = 0; j < bombPositions.length; j++) {

            if (bombPositions[j].rowIndex == rowNumber  && bombPositions[j].columnIndex == colNumber) {
                isBomb = true;
                continue;
            }

            if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber - 1) {
                cell.numberOfCloseBombs ++;
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
    }

    for (var i = 0; i < row.cells().length; i++) {
        decorateCell(row.cells()[i]);
    }
}

export function getBombPositions(numberOfBombs: number, numberOfRows: number, numberOfCoumns: number) {
    var bombPositions = [];
    
    var bombPositionAlreadyExists = function (position) {
         for (var i = 0; i < bombPositions.length; i++) {
             var existingBombPosition = bombPositions[i];
             if (existingBombPosition.rowIndex == position.rowIndex && existingBombPosition.columnIndex == position.columnIndex)
                 return true;
         }

        return false;
    };

    var  getRandomIndex = function(rangeEnd: number) : number {
        return Math.floor( Math.random() * rangeEnd);
    }

    var getBombPosition = function (rowCount: number, columnCount: number) {
        var rowIndex = getRandomIndex(rowCount);
        var columnIndex = getRandomIndex(columnCount);
        return new models.bombPosition(rowIndex, columnIndex);
    }

    while (bombPositions.length < numberOfBombs) {
        var bombPosition = getBombPosition(numberOfRows, numberOfCoumns);
        if (!bombPositionAlreadyExists(bombPosition)) {
            bombPositions.push(bombPosition);
        }
    }

    return bombPositions;
}

export function printRow(graph: any, row: any) {
    var printCell = function (cell) {
        var x = cell.rowNumber * 100;
        var y = cell.columnNumber * 100;
        var rect = graph.rect(x, y, 100, 100);
        rect.attr("fill", "green");
        rect.attr("stroke", "#fff");
        rect.node.onclick = function () {
            cell.label.attr("fill", "red");
        };
        cell.square = rect;
        var label = graph.text(x + 50, y + 50, cell.displayValue);
        label.attr("fill", "black");
        label.attr("font-size", "20");
        label.node.onclick = function () {
            cell.label.attr("fill", "red");
        };
        cell.label = label;
    }

    for (var i = 0; i < row.cells().length; i++) {
        printCell(row.cells()[i]);
    }
}
