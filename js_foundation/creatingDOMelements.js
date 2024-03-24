const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Hello World!";
console.log(container);
container.append(content);

const redContent = document.createElement("p");
redContent.classList.add("content");
redContent.textContent = "Hey I'm red!"
redContent.style.color = "red";
container.append(redContent);

const blueContent = document.createElement("h3");
blueContent.classList.add("content");
blueContent.textContent = "I'm a blue h3!";
blueContent.style.color = "blue";
container.append(blueContent);

const divContainer = document.createElement("div");
divContainer.style.border = "solid 1px black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!";

divContainer.append(h1);
divContainer.append(p);

container.append(divContainer);