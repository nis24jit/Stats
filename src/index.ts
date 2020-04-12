import { GenericReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReports } from './ReportTargets/ConsoleReports';
import { HtmlReports } from './ReportTargets/HtmlReport';
import { WinsAnalysis } from './Analyzers/WinaAnalysis';
import { Summary } from './Summary';

const matchReader = GenericReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
