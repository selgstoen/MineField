export function printRow(graph: any, row: any, clicked: Function) {
  
    var printCell = function (cell) {
        var x = cell.rowNumber * 100;
        var y = cell.columnNumber * 100;
        var startColor = "blue";

        var rect = graph.rect(y, x, 100, 100);
        rect.attr("fill", startColor);
        rect.attr("stroke", "#fff");
        cell.square = rect;

        var label = graph.text(y + 50, x + 50, cell.displayValue);
        label.attr("fill", startColor);
        label.attr("font-size", "20");
        label.node.onclick = cell.square.node.onclick;
        cell.label = label;
        cell.square.node.addEventListener("click", clicked, false);
        cell.square.node.param = cell;
    }

    for (var i = 0; i < row.cells().length; i++) {
        printCell(row.cells()[i]);
    }
}