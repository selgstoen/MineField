import models = require("models");

export function decorateCellsOnRow(row, bombPositions) {

    var decorateCell = function (cell) {
        var rowNumber = cell.rowNumber;
        var colNumber = cell.columnNumber;
        var isBomb = false;

        for (var j = 0; j < bombPositions.length; j++) {

            if (bombPositions[j].rowIndex == rowNumber  && bombPositions[j].columnIndex == colNumber) {
                isBomb = true;
            }

            if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber - 1) {
                cell.numberOfCloseBombs ++;
            }
            if (bombPositions[j].rowIndex == rowNumber && bombPositions[j].columnIndex == colNumber - 1) {
                cell.numberOfCloseBombs++;
            }
            if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber - 1) {
                cell.numberOfCloseBombs++;
            }

            if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber) {
                cell.numberOfCloseBombs++;
            }
            if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber) {
                cell.numberOfCloseBombs++;
            }

            if (bombPositions[j].rowIndex == rowNumber + 1 && bombPositions[j].columnIndex == colNumber + 1) {
                cell.numberOfCloseBombs++;

            }
            if (bombPositions[j].rowIndex == rowNumber && bombPositions[j].columnIndex == colNumber + 1) {
                cell.numberOfCloseBombs++;
            }
            if (bombPositions[j].rowIndex == rowNumber - 1 && bombPositions[j].columnIndex == colNumber + 1) {
                cell.numberOfCloseBombs++;
            }

            if (isBomb) {
                cell.displayValue = 'B';
                cell.isBomb = true;
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