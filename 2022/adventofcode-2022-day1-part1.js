import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const largestCalorieSum = pipe(
  split('\n\n'),
  map(items => split('\n')(items)),
  map(sum),
  reduce(max)(0)
)(input);

console.log(largestCalorieSum);
