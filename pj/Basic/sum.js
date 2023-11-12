const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  while (b !== 0) {
    // Carry now contains common set bits of a and b
    const carry = a & b;

    // Sum of bits of a and b where at least one of the bits is not set
    a = a ^ b;

    // Carry is shifted by one so that adding it to a gives the required sum
    b = carry << 1;
  }

  return a;
}   

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    const result = add(parseInt(num1), parseInt(num2));
    console.log(`The sum of ${num1} and ${num2} is: ${result}`);
    rl.close();
  });
});
