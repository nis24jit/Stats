"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinaAnalysis_1 = require("./Analyzers/WinaAnalysis");
var HtmlReport_1 = require("./ReportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    } //composition
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinaAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReports());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
