import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const rucksack = line =>
  map(split(''))(splitAt(line.length / 2)(line));


const part1Output =
  pipe(
    map(rucksack)
  )(lines);

console.log("Debug:" + part1Output[1][0]);
console.log("Debug:" + part1Output[1][1]);

// console.log("Part 1: " + part1Output);

process.exit(0);

// PART 2 ===================


const part2Output =
  pipe(
    map(rucksack)
  )(lines);

console.log("Part 2: " + part2Output);
