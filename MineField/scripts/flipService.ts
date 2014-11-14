var findCellFromPosition = function (rowNumber: any, colNumber: any, field: any): any {
    var cell = field.rows()[rowNumber].cells()[colNumber];

    return cell;
}

var flipUp = function (rowNumber: any, colNumber: any, field: any) {
    var currentColNumber = colNumber;

    while (currentColNumber >= 0) {
        var nextCell = findCellFromPosition(rowNumber, currentColNumber, field);
        if (! nextCell.flip()) {
             break;;
        }
        currentColNumber--;
    }
}

export function flipAroundCell(cell: any, field: any) {
    var rowNumber = cell.rowNumber;
    var colNumber = cell.columnNumber;

    flipUp(rowNumber, colNumber, field);

}