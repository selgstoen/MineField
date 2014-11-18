var findCellFromPosition = function (rowNumber: any, colNumber: any, field: any): any {
    var cell = field.rows()[rowNumber].cells()[colNumber];

    return cell;
}


var flipDiagonally = function (rowNumber: any, colNumber: any, field: any, direction: Function, limit: any) {
    var currentColNumber = colNumber;

    while (currentColNumber != limit) {
        var nextCell = findCellFromPosition(rowNumber, currentColNumber, field);
        if (!nextCell.flip()) {
            break;;
        }
        currentColNumber = direction(currentColNumber);
    }
}

var flipVertically = function (rowNumber: any, colNumber: any, field: any, direction: Function, limit: any) {
    var currentRowNumber = rowNumber;

    while (currentRowNumber != limit) {
        var nextCell = findCellFromPosition(currentRowNumber, colNumber, field);
        if (!nextCell.flip()) {
            break;
        }
        currentRowNumber = direction(currentRowNumber);
    }
}

var down = function(value) {
    return value - 1;
}

var up = function(value) {
    return value + 1;
}

export function flipAroundCell(cell: any, field: any) {
    var rowNumber = cell.rowNumber;
    var colNumber = cell.columnNumber;

    flipDiagonally(rowNumber, colNumber, field, down, -1);
    flipDiagonally(rowNumber, colNumber, field, up, field.rows().length);
    flipVertically(rowNumber, colNumber, field, down, -1);
    flipVertically(rowNumber, colNumber, field, up, field.rows()[0].cells().length);
}