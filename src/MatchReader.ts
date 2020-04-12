import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string]; //Tuple data structure

interface DataReader {
  read(): void;
  data: string[][];
}

export class GenericReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

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
