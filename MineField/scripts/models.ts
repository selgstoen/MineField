import ko = require("knockout");

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
    self.numberOfCloseBombs = 0;
    self.displayValue = rowNumber + ' - ' + columnNumber;
    self.square = ko.observable;
    self.label = ko.observable;

    self.flip = function (): boolean {
        self.isFlipped = true;
        self.label.attr("fill", "black");
        self.label.attr("text", self.displayValue);
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

    self.getNumberOfFlipped = function () {
        var count = 0;
        for (var i = 0; i < self.rows().length; i++) {
            count = count + self.rows()[i].getNumberOfFlipped();
        }

        return count;
    }
}

export function score(cunter: any) {
    var self = this;
    self.points = 0;

    var label = cunter.text(0, 40, 'Score:');
    label.attr("fill", 'black');
    label.attr("font-size", "20");
    label.attr({ 'text-anchor': 'start' });

    var value = cunter.text(80, 40, self.points + "/100" );
    value.attr("fill", 'black');
    value.attr("font-size", "20");
    value.attr({ 'text-anchor': 'start' });

    self.setpoints = function (points: any) {
        self.points =  points;
        value.attr("text", self.points + "/100");
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

    self.stop = function() {
        clearTimeout(t);
    }
 }

export function game(gamecontroller: any) {
    var self = this;


    var rect = gamecontroller.rect(400, 10, 100, 50);
    rect.attr("fill", "gray");
    rect.attr("stroke", "black");
    rect.attr("stroke-width", 1);
    rect.node.onclick = function () {
        location.reload(true);
    }

    var value = gamecontroller.text(450, 35,  "Reset");
    value.attr("fill", 'black');
    value.attr("font-size", "20");
    value.node.onclick = rect.node.onclick;
}

