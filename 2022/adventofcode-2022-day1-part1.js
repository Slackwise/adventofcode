// ╔═════════════╗
// ║ BOILERPLATE ║
// ╟─────────────╨───────────────────────────────────────────────────────────╖
/* ║ */ import { getInput, ramda } from './bootstrap.js';                 // ║
/* ║ */ const { input, lines } = getInput(import.meta.url);               // ║
/* ║ */ Object.entries(ramda).forEach(([fname, f]) => global[fname] = f); // ║
// ╚═════════════════════════════════════════════════════════════════════════╝


const largestCalorieSum = pipe(
  map(items => split('\n')(items)),
  map(sum),
  max
)(split('\n\n')(input));

console.log(largestCalorieSum);
