import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const largestDescending = (a, b) =>
  b - a;

const top3CalorieSums = pipe(
  split('\n\n'),
  map(items => split('\n')(items)),
  map(sum),
  sort(largestDescending),
  take(3),
  sum
)(input);

console.log(top3CalorieSums);
