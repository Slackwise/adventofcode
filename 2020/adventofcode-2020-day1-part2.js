// Run this from the browser console right on the input page!
const numbers    = document.body.textContent.trim().split('\n').map(Number);
const sorted     = numbers.sort((a, b) => a - b);
const set        = new Set(numbers);
const goalSum    = 2020;
const difference = n => goalSum - n;
const subtrahend = numbers.find(n => set.has(difference(n)));
const minuend    = difference(subtrahend);
const product    = subtrahend * minuend;
