﻿
export function printRow(graph: any, row: any, clicked: Function) {
  
    var cancelContextMeny = function() {
        return false; 
        
    }

    var printCell = function (cell) {
        var x = cell.rowNumber * 100;
        var y = cell.columnNumber * 100;
        var startColor = "#153f14";

        var rect = graph.rect(y + 100, x + 100, 100, 100);
        rect.attr("fill", startColor);
        rect.attr("stroke", "black");
        rect.attr("stroke-width", 5);
        cell.square = rect;

        var label = graph.text(y + 150, x + 150, cell.displayValue);
        label.attr("fill", startColor);
        label.attr("font-size", "20");
        label.node.onclick = cell.square.node.onclick;
        cell.label = label;
        cell.square.node.oncontextmenu = cancelContextMeny;
        cell.square.node.addEventListener("mousedown", clicked, false);
        cell.square.node.param = cell;
    }

    for (var i = 0; i < row.cells().length; i++) {
        printCell(row.cells()[i]);
    }
}