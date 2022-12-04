import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);


const rucksack = line =>
  map(split(''))(splitAt(line.length / 2)(line));

const isLowercase = letter =>
  /[a-z]/.test(letter);

const LOWERCASE_PRIORITY_OFFSET = -96;
const UPPERCASE_PRIORITY_OFFSET = -38;

const priority = letter => {
  const  code = letter.charCodeAt(0);
  return code + (isLowercase(letter)
                 ? LOWERCASE_PRIORITY_OFFSET
                 : UPPERCASE_PRIORITY_OFFSET);
};

const part1Output =
  pipe(
    map(rucksack),
    map(apply(intersection)),
    map(map(priority)),
    sum
  )(lines);

console.log("Part 1: " + part1Output);

process.exit(0);

// PART 2 ===================


const part2Output =
  pipe(
    map(rucksack)
  )(lines);

console.log("Part 2: " + part2Output);
