var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");


function handleClick(event) {
    var value = event.target.value;
    alert(value);


    event.target.removeEventListener("click", handleClick);
}


input1.addEventListener("click", handleClick);
input2.addEventListener("click", handleClick);
input3.addEventListener("click", handleClick);