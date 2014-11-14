define(["require", "exports"], function(require, exports) {
    var findCellFromPosition = function (rowNumber, colNumber, field) {
        var cell = field.rows()[rowNumber].cells()[colNumber];

        return cell;
    };

    var flipUp = function (rowNumber, colNumber, field) {
        var currentColNumber = colNumber;

        while (currentColNumber >= 0) {
            var nextCell = findCellFromPosition(rowNumber, currentColNumber, field);
            if (!nextCell.flip()) {
                break;
                ;
            }
            currentColNumber--;
        }
    };

    function flipAroundCell(cell, field) {
        var rowNumber = cell.rowNumber;
        var colNumber = cell.columnNumber;

        flipUp(rowNumber, colNumber, field);
    }
    exports.flipAroundCell = flipAroundCell;
});
//# sourceMappingURL=flipservice.js.map
