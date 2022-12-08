import { map } from 'ramda';
import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const parseAssignmentRanges = line => {
  const assigments = split(',')(line);
  const [ first, second ] = map(split('-'))(assigments);
  return {
    first: {
      start: first[0],
      end:   first[1],
    },
    second: {
      start: second[0],
      end:   second[1]
    }
  };
};

  
  
const contains = (a, b) =>
  a.start <= b.start &&
  a.end   >= b.end;

const isOverlappingAssignmentPair = ({ first, second }) =>
  contains(first, second) || contains(second, first);

const part1Output =
  pipe(
    map(parseAssignmentRanges),
    map(isOverlappingAssignmentPair),
    count(equals(T)),
  )(lines);

console.log("Part 1: " + part1Output);


process.exit(1); // Delete after finishing part 1
// PART 2 ===================


const part2Output =
  pipe(
    sum
  )(lines);

console.log("Part 2: " + part2Output);
