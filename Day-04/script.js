// Arithmetic operators

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 % 20);
console.log(10 ** 20);
console.log(2 ** 3);

console.log(+10);
console.log(+-10);
console.log(+"5");

console.log(+"batch"); // NaN - Not a Number, part of number

console.log(-10);
console.log(-"10");
console.log(-"sdfgh");

// Increment operators --> +1
//  decrement --> -1

// console.log( 5++ )
let num = 5;
console.log(num++); // 5
console.log(num++); // 6
console.log(++num); // 8
console.log(num); //8

console.log(num--); // 8, num=7
console.log(--num); // 8, num=7

// Logical operators - &&, ||, !

// && - need both operands true - true
console.log(true && false);
console.log(true && true);
console.log(null && true);
console.log("10" && true);
// falsy values ("", null, 0, undefined) & truthy values

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);
console.log(!"");

// operator precedence - &&
console.log(true || (false && ""));

//  Comparision operators -> ==, !=, ===, !==, >, >=, <, <=

console.log(10 > 20);
console.log(10 < 20);
console.log(10 <= 20);
console.log(20 <= 20);

console.log(10 == "10");
console.log(10 === "10");
console.log(10 !== "10");
