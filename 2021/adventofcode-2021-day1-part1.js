// Run this from the browser console right on the input page!
const numbers = document.body.textContent.trim().split('\n').map(Number);
const increaseCount = numbers.reduce(({previousNumber, increaseCount}, number) => (
  {
    increaseCount: number > previousNumber ? increaseCount + 1 : increaseCount,
    previousNumber: number
  }
  ), { previousNumber: Infinity, increaseCount: 0 })
  .increaseCount;

console.log(increaseCount);
