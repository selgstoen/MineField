var findCellFromPosition = function (rowNumber: any, colNumber: any, field: any): any {
    var cell = field.rows()[rowNumber].cells()[colNumber];

    return cell;
}


var flipIfNotFlipped = function(cell: any, field: any) {
    if (!cell.isFlipped) {
        if (cell.flip()) {
            flipAroundCell(cell, field);
        }
    }
}

export function flipAroundCell(cell: any, field: any) {
    var rowNumber = cell.rowNumber;
    var colNumber = cell.columnNumber;

    if (cell.allCellsAroundFlipped) {
        return;
    }

    if (rowNumber > 0) {
        var upCell = findCellFromPosition(rowNumber - 1,colNumber, field);
        flipIfNotFlipped(upCell, field);
    }

    if (rowNumber < field.rows().length - 1) {
        var downCell = findCellFromPosition(rowNumber + 1, colNumber, field);
        flipIfNotFlipped(downCell, field);
    }

    if (colNumber  > 0) {
        var leftCell = findCellFromPosition(rowNumber, colNumber - 1, field);
        flipIfNotFlipped(leftCell, field);
    }


    if (colNumber < field.rows()[0].cells().length - 1) {
        var rightCell = findCellFromPosition(rowNumber, colNumber + 1, field);
        flipIfNotFlipped(rightCell, field);
    }

    cell.allCellsAroundFlipped = true;
}

