import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const rucksack = line => {
  const  [ first, second ] = splitAt(line.length / 2)(line);
  return { first, second };
};


const part1Output =
  pipe(
    map(rucksack)
  )(lines);

console.log("Debug:" + part1Output[1].first);
console.log("Debug:" + part1Output[1].second);

// console.log("Part 1: " + part1Output);

process.exit(0);

// PART 2 ===================


const part2Output =
  pipe(
    map(rucksack)
  )(lines);

console.log("Part 2: " + part2Output);
