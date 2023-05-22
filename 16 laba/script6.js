
var paragraf1 = document.getElementById("paragraf1");
var paragraf2 = document.getElementById("paragraf2");
var paragraf3 = document.getElementById("paragraf3");

function handleClick(event) {
    var number = parseInt(event.target.textContent);
    var square = number * number;
    event.target.textContent = square;
}


paragraf1.addEventListener("click", handleClick);
paragraf2.addEventListener("click", handleClick);
paragraf3.addEventListener("click", handleClick);