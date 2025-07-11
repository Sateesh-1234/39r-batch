// Variable shadowing

// var rain = "IceCream";

// function fun() {
//   var rain = "Samosa with Chai";
//   console.log(rain);
// }

// fun();
// console.log(rain);

// variable hoisting

// console.log(num);
// var num = 50;

// console.log(num);

// console.log(paper);
// let paper = "News paper";

// function hoisting

// function fun() {
//   function f2() {
//     console.log(`asdfghjkl`);
//   }
//   console.log(`paper`);

//   f2();
// }
// fun();

// using tagnames
// console.log(document.getElementsByTagName("p"));

// console.log(document.getElementsByTagName("h1"));

// console.log(document.getElementsByClassName("pClass"));

// console.log(document.getElementsByTagName("div"));

// console.log(document.getElementById("scroll"));

let p = document.querySelector("p");
console.log(p);

let pAll = document.querySelectorAll("p");
console.log(pAll);
