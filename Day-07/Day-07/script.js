// let sts = false;
// console.log(sts);

// if (sts) {
//   console.log("The fan is running!");
// } else {
//   console.log("No, the fan is not running!");
// }

/**
 * for loops :- number of ioterations known
 *
 * for(initialization; condition; updatation){
 *   statements
 * }
 *
 * */

// for (let index = 1; index <= 5; index++) {
//   /*
//         1 -> true
//         2 -> false
//         3 -> true
//         4 -> false

//     */
//   if (index % 2 == 0) {
//     console.log("No, the fan is not running!");
//   } else {
//     console.log("the fan is running!");
//   }
// }

/**
 * While loop -> when we do not have any idea about iterations 
 * 
 * initialization;
 * while(condition){
 *  statements
 * 
    updatation 
 * }
 * 
 * */

// 1 - 10 print
// let num = 1;
// while (num < 11) {
//   console.log(num);

//   num++;
// }

// do - while  => runs atleast 1 time
// let num = 10;
// do {
//   console.log(num);
//   num--;
// } while (num >= 1);

// let num = 10;
// do {
//   console.log(num);
//   num--;
// } while ();

// ternary operator

// if(condition){

// }else{

// }

/*
    (condition) ? "truthy statements" : "falsy statments"
    **/

// let a = 10;
// let b = 20;

// a > b ? console.log("a is larger value") : console.log("b is larger value");

// functions - for reusability of block of code
/*

function function_name(parameters){
    statements
}

function_name(argumnents) function calling / invokation 
**/

// factorial -> 5! -> 5*4*3*2*1 = 120
// function fact(num) {
//   if (num == 1 || num == 0) return 1;
//   else return num * fact(num - 1);
//   // console.log(10)
//   // console.log(10)
//   // console.log(10)
//   // console.log(10)
//   // console.log(10)
// }

// fact(5);

/*
5 -> 5 * 4 = 20

5 4 3 2 1

for(let i=5; i>=1; i--){
    console.log(i)
}
*/

// function fact(num) {
//   let val = 1;
//   for (let num = 5; num >= 1; num--) {
//     val = val * num;
//   }
//   console.log(val);
// }
// fact(5);

// function fact(num) {
//   let val = 1;
//   for (let num = 5; num >= 1; num--) {
//     val = val * num;
//   }
//   return val;
// }
// console.log(fact(5));

// Type conversions -> Implicit & Explicit

// Implicit type conversion -> Done by the lang iteself

// Explicit type conversion -> Manual - Numbers, arrays, strings, objects

// Nbumber()

// implicit conversions

// 1. two diff dt, +, apart from the string

console.log(typeof ("10" + 10)); // 1010

console.log("asdfghj" + 10);

console.log("qwert" + undefined);
console.log("qwert" + undefined);

console.log("10" + 10);

console.log(typeof ("100" - 10)); // 100 -10
