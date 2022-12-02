import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);
//
// In Clojure, this would just be a map,
// which would be used as a self-indexing function:
const scoreHand = {
  ROCK:     1,
  PAPER:    2,
  SCISSORS: 3
};

const victor = {
  ROCK:     'PAPER',
  PAPER:    'SCISSORS',
  SCISSORS: 'ROCK'
};

const loser = {
  ROCK:     'SCISSORS',
  PAPER:    'ROCK',
  SCISSORS: 'PAPER'
};

const outcome = (opponent, self) =>
  self == victor[opponent]
    ? 'WIN'
    : self == loser[opponent]
      ? 'LOSER'
      : 'DRAW';

const scoreOutcome = {
  WIN:  6,
  LOSE: 0,
  DRAW: 3
};

const score = ({ opponent, self }) =>
  scoreHand[self] + scoreOutcome[outcome(opponent, self)];

const hand = code => {
  switch (code.toUpperCase()) {
    case 'A':
    case 'X':
    case 'ROCK':
      return 'ROCK';
    case 'B':
    case 'Y':
    case 'PAPER':
      return 'PAPER';
    case 'C':
    case 'Z':
    case 'SCISSORS':
      return 'SCISSORS';
  }
};

const matchup = line =>
  pipe(
    split(' '),
    map(hand),
    ([ opponent, self ]) => ({ opponent, self }) // #TODO: abstract into fn
  )(line);


const sumAll = reduce(sum)(0);

const totalScore =
  pipe(
    map(matchup),
    map(score),
    sumAll
  )(lines);

console.log(totalScore);
