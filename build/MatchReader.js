"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var GenericReader = /** @class */ (function () {
    function GenericReader(reader) {
        this.reader = reader;
        this.matches = [];
        reader.read();
    }
    GenericReader.fromCsv = function (filename) {
        return new GenericReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    GenericReader.prototype.load = function () {
        this.matches = this.reader.data.map(this.mapRow);
    };
    GenericReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return GenericReader;
}());
exports.GenericReader = GenericReader;
