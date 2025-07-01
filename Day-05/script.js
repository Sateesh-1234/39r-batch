// // comma operator

// console.log("39R");
// console.log("Batch");

// console.log("39R", "Batch");

// // String operator
// console.log("39R " + "Batch");

// // Bitwise operators

// /*

// 5 - Decimal format, base 10
// 0 1 0 1 -> Nimary format, base 2

// 1 byte - 8 bits

// 1 - 00000001

// crud - create, read, update, delete

// Bitwise --> &, |, ^, ~

// 5 & 3
//     8 4 2 1
// 5-> 0 1 0 1
// 3-> 0 0 1 1
// --------------
//     0 0 0 1

// r -> 1
// */

// console.log(5 & 3);
// console.log(11 & 13); //  9

// // bitwise OR  -> | -> if we have 2 zeros - then 0

// console.log(5 | 3);

// /*
// 5 | 3
//     8 4 2 1
// 5-> 0 1 0 1
// 3-> 0 0 1 1
// --------------
//     0 1 1 1

// */

// console.log(26 | 25);

// console.log(55 & 65); // 75  1 5 1 1  0  1

// // bitwise XOR -  ^ -> for diff values -> 1

// console.log(1 ^ 1);
// console.log(100 ^ 125); // 25

// // bitwise not - ~ -> 0 -> 1
// console.log(~5);
// console.log(~1);
// console.log(~2);
// console.log(~0);
// console.log(~-0);

// // Assignment operators
// let name;
// name = 10;

// let num = 10;
// console.log(num);

// // Arithmetic Addition assignment +=
// let n = 10;
// n = n + 10; // 20
// n += 100; // n+100 -> n
// console.log(n);
// // -=
// // n=120
// n -= 20; // n = n-20
// console.log(n); // 80 100

// // *=
// console.log((n *= 2));

// // /=
// console.log((n /= 2));
// console.log((n %= 2));

// // control flow ->

// /*
// control flow
//     Conditional Statements / structures
//     Loops
// */

// // Conditionals --> if, if-else, else-if, nested, switch case

// let numm = 100;

// if (numm < 200) {
//   console.log(numm);
//   let oops = "booo";
//   console.log(oops);
// }
//state

if (5) {
  console.log("asdfgh");
}

// falsy values -> '', undefinend, null, 0, false

// if-else

/*
if(condition){
    // statements
}
else{
    // statements
}
*/

let v = 5;
if (v == 2) {
  console.log("it is 2");
} else {
  console.log("it si not a 2");
}
//  v = 5
if (v == 10) {
  console.log("10");
} else if (v == 20) {
} else {
  console.log("not ");
}
