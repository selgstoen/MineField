import models = require("models");

export function getBombPositions(numberOfBombs: number, numberOfRows: number, numberOfCoumns: number) {
    var bombPositions = [];

    for (var i = 0; i < numberOfBombs; i++) {
        bombPositions.push(new models.bombPosition(i, i));
    }

    return bombPositions;
}