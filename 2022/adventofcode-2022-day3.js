import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);


const rucksack = line =>
  map(split(''))(splitAt(line.length / 2)(line));

const isLowercase = char =>
  /[a-z]/.test(char);

const LOWERCASE_PRIORITY_OFFSET = -96;
const UPPERCASE_PRIORITY_OFFSET = -38;

const priority = char => {
  const  code = char.charCodeAt(0);
  return code + (isLowercase(char)
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


// PART 2 ===================


const part2Output =
  pipe(
    map(split('')),
    map(reduce((a, c) => ({ ...a, [c]: 1 }))({})),
    splitEvery(3),
    map(reduce(mergeWith(add))({})),
    // filter(({k, v}) => v == 3),
    // values,
    // map(priority),
    // sum
  )(lines);


console.log("Part 2: " + part2Output);
