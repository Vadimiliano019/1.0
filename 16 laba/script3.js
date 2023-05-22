var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");


function handleMouseover(event) {
    var href = event.target.getAttribute("href");
    event.target.textContent += " (" + href + ")";


    event.target.removeEventListener("mouseover", handleMouseover);
}


function handleMouseout(event) {
    var href = event.target.getAttribute("href");
    event.target.textContent = event.target.textContent.replace(" (" + href + ")", "");


    event.target.addEventListener("mouseover", handleMouseover);
}


link1.addEventListener("mouseover", handleMouseover);
link1.addEventListener("mouseout", handleMouseout);

link2.addEventListener("mouseover", handleMouseover);
link2.addEventListener("mouseout", handleMouseout);

link3.addEventListener("mouseover", handleMouseover);
link3.addEventListener("mouseout", handleMouseout);


