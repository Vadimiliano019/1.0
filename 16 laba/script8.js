var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");


function makeRed(event) {
    event.target.classList.add("False");
    event.target.classList.remove("True");
    event.target.removeEventListener("click", makeRed);
    event.target.addEventListener("click", makeGreen);
}


function makeGreen(event) {
    event.target.classList.add("True");
    event.target.classList.remove("False");
    event.target.removeEventListener("click", makeGreen);
    event.target.addEventListener("click", makeRed);
}


div1.addEventListener("click", makeRed);
div2.addEventListener("click", makeGreen);
div3.addEventListener("click", makeRed);
