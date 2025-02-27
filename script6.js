// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));
// //Styling an attribute 
// let divs = document.querySelector("div");
// console.log(divs);
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";
// div.style.visibility = "hidden";
//Creating new element and appending it 
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);
// let p = document.querySelector("p");
// console.log(p);
// p.after(newBtn);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi!!! I am new!";
document.querySelector("body").prepend(newHeading);
let para = document.querySelector("p");
para.remove();
newHeading.remove();