calcMass  = mass => Math.floor(mass / 3) - 2;
masses    = document.body.textContent.trim().split('\n').map(Number);
sum       = (a, c) => a + c;
masses.map(calcMass).reduce(sum);
