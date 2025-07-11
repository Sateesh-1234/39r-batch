let tag12 = document.createElement("h1");

tag12.textContent = "lorem";

document.firstElementChild.lastElementChild.appendChild(tag12);

console.log(tag12);

tag12.style.color = "red";
tag12.style.background = "black";
