define(["require", "exports", "knockout"], function(require, exports, ko) {
    function table() {
        var self = this;

        self.draw = function () {
            var background = Raphael(0, 0, 1500, 1500);
            var t = background.rect(0, 0, 1500, 1500);
            t.attr("fill", "#42c63f");
        };
    }
    exports.table = table;

    function bombPosition(rowIndex, columnIndex) {
        var self = this;
        self.rowIndex = rowIndex;
        self.columnIndex = columnIndex;
    }
    exports.bombPosition = bombPosition;

    function row(rowNumber, columnCount) {
        var self = this;
        self.cells = ko.observableArray();

        self.getNumberOfFlipped = function () {
            var count = 0;
            for (var i = 0; i < self.cells().length; i++) {
                if (self.cells()[i].isFlipped) {
                    count = count + 1;
                }
            }

            return count;
        };

        for (var cellNr = 0; cellNr < columnCount; cellNr++) {
            self.cells.push(new exports.cell(rowNumber, cellNr));
        }
    }
    exports.row = row;

    function cell(rowNumber, columnNumber) {
        var self = this;
        self.rowNumber = rowNumber;
        self.columnNumber = columnNumber;
        self.isBomb = false;
        self.isFlipped = false;
        self.numberOfCloseBombs = 0;
        self.displayValue = rowNumber + ' - ' + columnNumber;
        self.square = ko.observable;
        self.label = ko.observable;

        self.flip = function () {
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
        };
        self.markBomb = function () {
            self.label.attr("fill", "red");
            self.label.attr("text", "B");
        };
    }
    exports.cell = cell;

    function field(rowCount, columnCount, bombPositions) {
        var self = this;
        self.rows = ko.observableArray();
        self.bombPostions = bombPositions;

        for (var rowNr = 0; rowNr < rowCount; rowNr++) {
            self.rows.push(new exports.row(rowNr, columnCount));
        }

        self.getNumberOfFlipped = function () {
            var count = 0;
            for (var i = 0; i < self.rows().length; i++) {
                count = count + self.rows()[i].getNumberOfFlipped();
            }

            return count;
        };
    }
    exports.field = field;

    function score(cunter) {
        var self = this;
        self.points = 0;

        var label = cunter.text(0, 40, 'Score:');
        label.attr("fill", 'black');
        label.attr("font-size", "20");
        label.attr({ 'text-anchor': 'start' });

        var value = cunter.text(80, 40, self.points + "/100");
        value.attr("fill", 'black');
        value.attr("font-size", "20");
        value.attr({ 'text-anchor': 'start' });

        self.setpoints = function (points) {
            self.points = points;
            value.attr("text", self.points + "/100");
        };
    }
    exports.score = score;

    function watch(time) {
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

        var tick = function () {
            self.elapsedTime = self.elapsedTime + 1;
            value.attr("text", self.elapsedTime);
            timer();
        };

        var timer = function () {
            t = setTimeout(tick, 1000);
        };

        self.start = function () {
            self.running = true;
            timer();
        };

        self.stop = function () {
            clearTimeout(t);
        };
    }
    exports.watch = watch;

    function game(gamecontroller) {
        var self = this;

        var rect = gamecontroller.rect(400, 10, 100, 50);
        rect.attr("fill", "gray");
        rect.attr("stroke", "black");
        rect.attr("stroke-width", 1);
        rect.node.onclick = function () {
            location.reload(true);
        };

        var value = gamecontroller.text(450, 35, "Reset");
        value.attr("fill", 'black');
        value.attr("font-size", "20");
        value.node.onclick = rect.node.onclick;
    }
    exports.game = game;
});
//# sourceMappingURL=models.js.map
