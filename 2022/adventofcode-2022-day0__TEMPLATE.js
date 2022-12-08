import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);


const part1Output =
  pipe(
    sum
  )(lines);

console.log("Part 1: " + part1Output);

process.exit(1); // Delete after finishing part 1
// PART 2 ===================


const part2Output =
  pipe(
    sum
  )(lines);

console.log("Part 2: " + part2Output);
