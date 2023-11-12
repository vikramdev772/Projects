// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function add(a, b) {
  while (b !== 0) {
    // Carry now contains common set bits of a and b
    const carry = a & b;
    console.log("\n\t carry : "+carry);

    // Sum of bits of a and b where at least one of the bits is not set
    a = a ^ b;
    console.log("\n\t a value a=a^b :"+a);
    console.log("\n\tlet a :"+a+" b : "+b);
    // Carry is shifted by one so that adding it to a gives the required sum
    b = carry << 1;
    console.log("\n\t b value b=carry << 1 : "+b);
  }

  return a;
}
console.log("\n\t Let a value : 4 \n\t  b value : 5");
console.log(add(4,5));

