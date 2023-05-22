var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");


var demo = document.getElementById("demo");


function handleBlur(event) {
    var value = event.target.value;
    demo.textContent = value;
}


input1.addEventListener("blur", handleBlur);
input2.addEventListener("blur", handleBlur);
input3.addEventListener("blur", handleBlur);