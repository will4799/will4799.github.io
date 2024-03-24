const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function (e) {
    console.log(e.offsetX);
})