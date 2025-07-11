// // console.log(document);

// // console.log(window.document);

// // accessing elements
// para = window.document.getElementsByTagName("p");
// console.log(para);

// console.log(document.getElementsByTagName("a", "p"));

// console.log(document.getElementsByClassName("h3"));

// console.log(document.getElementById("h3"));

// console.log(document.getElementById("para"));

// console.log(document.getElementById("scroll"));
// console.log(document.getElementById("h3"));

// let ele = document.querySelectorAll("P");
// console.log(ele);
// let eles = document.querySelector("P");
// console.log(eles);

console.log(document.getElementById("data").innerText);

console.log(document.getElementById("data").innerHTML);

console.log(document.getElementById("data").textContent);

let data = document.getElementById("data");

data.innerText = "Mobile";

console.log(data);

data.innerHTML = "Phone";
console.log(data);

data.textContent = "Remote";
console.log(data);

console.log(document.getElementById("h3"));
