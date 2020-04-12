import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class GenericReader {
  static fromCsv(filename: string): GenericReader {
    return new GenericReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {
    reader.read();
  }

  load(): void {
    this.matches = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //type assertion
      row[6],
    ];
  }
}
