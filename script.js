

let rootcontainerEl = document.getElementById("rootcontainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "this is my first page";
headingEl.style.color='red';
rootcontainerEl.appendChild(headingEl);


let inputEl = document.createElement("input")
inputEl.label = "Enter your name";
inputEl.style.backgroundColor="skyblue";
rootcontainerEl.appendChild(inputEl);