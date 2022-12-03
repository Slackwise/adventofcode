import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

// In Clojure, this would just be a map,
// which would be used as a self-indexing function:
const scoreHand = {
  ROCK:     1,
  PAPER:    2,
  SCISSORS: 3
};

const winAgainst = {
  ROCK:     'PAPER',
  PAPER:    'SCISSORS',
  SCISSORS: 'ROCK'
};

const loseTo = {
  ROCK:     'SCISSORS',
  PAPER:    'ROCK',
  SCISSORS: 'PAPER'
};

const outcome = (opponent, self) =>
  self == winAgainst[opponent]
    ? 'WIN'
    : self == loseTo[opponent]
      ? 'LOSE'
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


const totalScore =
  pipe(
    map(matchup),
    map(score),
    sum
  )(lines);

console.log("Part 1: " + totalScore);


// PART 2 ===================

const strategyMap = {
  X: 'LOSE',
  Y: 'DRAW',
  Z: 'WIN'
};

const strategy = line =>
  pipe(
    split(' '),
    ([ handCode, requiredOutcomeCode ]) => (
      {
        opponentHand:    hand(handCode),
        requiredOutcome: strategyMap[requiredOutcomeCode]
      }
    ),
  )(line);


const followStrategy = ({ opponentHand, requiredOutcome }) =>(
  {
    opponent:   opponentHand,
    self:       requiredOutcome == 'WIN'
                  ? winAgainst[opponentHand]
                  : requiredOutcome == 'LOSE'
                    ? loseTo[opponentHand]
                    : opponentHand
  }
);


const totalScore2 =
  pipe(
    map(strategy),
    map(followStrategy),
    map(score),
    sum
  )(lines);


console.log("Part 2: " + totalScore2);
