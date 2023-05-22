
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");


function handleBlur(event) {
    var input = event.target;
    var expectedLength = parseInt(input.getAttribute("data-length"));
    var actualLength = input.value.length;

    if (actualLength === expectedLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}


input1.addEventListener("blur", handleBlur);
input2.addEventListener("blur", handleBlur);
input3.addEventListener("blur", handleBlur);