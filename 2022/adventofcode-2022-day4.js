import { identical, map } from 'ramda';
import getInput from './init.js';
const { input, lines } = getInput(import.meta.url);

const parseAssignmentRanges = line => {
  const assigments = split(',')(line);
  const [ first, second ] = map(split('-'))(assigments);
  return {
    first: {
      start: parseInt(first[0]),
      end:   parseInt(first[1]),
    },
    second: {
      start: parseInt(second[0]),
      end:   parseInt(second[1])
    }
  };
};

const contains = (a, b) =>
  a.start <= b.start &&
  a.end   >= b.end;

const isFullyContainedAssignmentPair = ({ first, second }) =>
  contains(first, second) || contains(second, first);

const part1Output =
  pipe(
    map(parseAssignmentRanges),
    map(isFullyContainedAssignmentPair),
    count(identity)
  )(lines);


console.log("Part 1: " + part1Output);


// PART 2 ===================


const isOverlappingAssignmentPair = ({ first, second }) =>
  (first.end  >= second.start && first.end  <= second.end) ||
  (second.end >= first.start  && second.end <= first.end);

const part2Output =
  pipe(
    map(parseAssignmentRanges),
    map(isOverlappingAssignmentPair),
    count(identity)
  )(lines);

console.log("Part 2: " + part2Output);
