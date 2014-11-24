import ko = require("knockout");

export function background(graph: any) {
    var b = graph.rect(0, 0, 1500, 1500);
    b.attr("fill", "#42c63f");
}

export function bombPosition(rowIndex: number, columnIndex: number) {
    var self = this;
    self.rowIndex = rowIndex;
    self.columnIndex = columnIndex;
}

export function row(rowNumber: number, columnCount: number) {
    var self = this;
    self.cells = ko.observableArray();

    self.getNumberOfFlipped = function() {
        var count = 0;
        for (var i = 0; i < self.cells().length; i++) {
            if (self.cells()[i].isFlipped) {
                count = count + 1;
            }
        }

        return count;
    }
   
    for (var cellNr = 0; cellNr < columnCount; cellNr++) {
        self.cells.push(new cell(rowNumber, cellNr));
    }
}

export function cell(rowNumber: number, columnNumber: number) {
    var self = this;
    self.rowNumber = rowNumber;
    self.columnNumber = columnNumber;
    self.isBomb = false;
    self.isFlipped = false;
    self.allCellsAroundFlipped = false;
    self.numberOfCloseBombs = 0;
    self.displayValue = rowNumber + ' - ' + columnNumber;
    self.square = ko.observable;
    self.label = ko.observable;

    self.flip = function (): boolean {
        self.isFlipped = true;
        self.label.attr("fill", "black");
        self.label.attr("text", self.displayValue);
        if (!this.isBomb) {
            self.square.attr("fill", "#42c63f");
        } else {
            self.square.attr("fill", "red");
        }

        if (this.displayValue === 0) {
            return true;
        }

        return false;
    }
    self.markBomb = function() {
        self.label.attr("fill", "red");
        self.label.attr("text", "B");
    }
}

export function field(rowCount: number, columnCount: number, bombPositions: any) {
    var self = this;
    self.rows = ko.observableArray();
    self.bombPostions = bombPositions;
    
    for (var rowNr = 0; rowNr < rowCount; rowNr++) {
        self.rows.push(new row(rowNr, columnCount));
    }

    self.getNumberOfFlipped = function () {
        var count = 0;
        for (var i = 0; i < self.rows().length; i++) {
            count = count + self.rows()[i].getNumberOfFlipped();
        }

        return count;
    }
}

export function score(graph: any) {
    var self = this;
    self.points = 0;

    var label = graph.text(400, 50, 'Score:');
    label.attr("fill", 'black');
    label.attr("font-size", "20");
    label.attr({ 'text-anchor': 'start' });

    var value = graph.text(480, 50, self.points + "/100" );
    value.attr("fill", 'black');
    value.attr("font-size", "20");
    value.attr({ 'text-anchor': 'start' });

    self.setpoints = function (points: any) {
        self.points =  points;
        value.attr("text", self.points + "/100");
    }
}

export function watch(graph: any) {
    var self = this;
    self.elapsedTime = ko.observable;
    self.running = false;
    self.elapsedTime = 0;
    var t;

    var label = graph.text(100, 50, 'Time spent:');
    label.attr("fill", 'black');
    label.attr("font-size", "20");
    label.attr({ 'text-anchor': 'start' });

    var value = graph.text(210, 50, self.elapsedTime);
    value.attr("fill", 'black');
    value.attr("font-size", "20");
    value.attr({ 'text-anchor': 'start' });

    var tick = function() {
        self.elapsedTime = self.elapsedTime + 1;
        value.attr("text", self.elapsedTime);
        timer();
    }

    var timer = function() {
        t = setTimeout(tick, 1000);
    }

    self.start = function () {
        self.running = true;
        timer();
    }

    self.stop = function() {
        clearTimeout(t);
    }
 }

export function game(graph: any) {

    var rect = graph.rect(1000, 10, 100, 50);
    rect.attr("fill", "gray");
    rect.attr("stroke", "black");
    rect.attr("stroke-width", 1);
    rect.node.onclick = function () {
        location.reload(true);
    }

    var value = graph.text(1050, 35,  "Reset");
    value.attr("fill", 'black');
    value.attr("font-size", "20");
    value.node.onclick = rect.node.onclick;
}

