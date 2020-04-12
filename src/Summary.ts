import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinaAnalysis';
import { HtmlReports } from './ReportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReports());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {} //composition

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
