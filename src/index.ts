import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
const reader = new CsvFileReader('football.csv');
reader.read();

const date = reader.data[0][0];
console.log(date);
//Test From develop
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
