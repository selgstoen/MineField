import ko = require("knockout");

export function bombPosition(rowIndex: number, columnIndex: number) {
    var self = this;
    self.rowIndex = rowIndex;
    self.columnIndex = columnIndex;
}

export function row(rowNumber: number, columnCount: number) {
    var self = this;
    self.cells = ko.observableArray();

    for (var cellNr = 0; cellNr < columnCount; cellNr++) {
        self.cells.push(new cell(rowNumber, cellNr));
    }
}

export function cell(rowNumber: number, columnNumber: number) {
    var self = this;
    self.rowNumber = rowNumber;
    self.columnNumber = columnNumber;
    self.isBomb = false;
    self.numberOfCloseBombs = 0;
    self.displayValue = rowNumber + ' - ' + columnNumber;
    self.square = ko.observable;
    self.label = ko.observable;
    self.flip = function () : boolean {
        self.label.attr("fill", "black");
        if (!this.isBomb) {
            self.square.attr("fill", "white");
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
}

export function watch(time: any) {
    var self = this;
    self.elapsedTime = ko.observable;
    self.running = false;
    self.elapsedTime = 0;
    var t;

    
    var label = time.text(0, 40, 'Time spent:');
    label.attr("fill", 'black');
    label.attr("font-size", "20");
    label.attr({ 'text-anchor': 'start' });

    var value = time.text(110, 40, self.elapsedTime);
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
 }

