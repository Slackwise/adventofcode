// ╔═════════════╗
// ║ BOILERPLATE ║
// ╟─────────────╨───────────────────────────────────────────────────────────╖
/* ║ */ import { getInput, ramda } from './bootstrap.js';                 // ║
/* ║ */ const { input, lines } = getInput(import.meta.url);               // ║
/* ║ */ Object.entries(ramda).forEach(([fname, f]) => global[fname] = f); // ║
// ╚═════════════════════════════════════════════════════════════════════════╝


const largestCalorieSum = pipe(
  split('\n\n'),
  map(items => split('\n')(items)),
  map(sum),
  reduce(max)(0)
)(input);

console.log(largestCalorieSum);
