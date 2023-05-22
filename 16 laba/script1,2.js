'use strict'
let elem = document.getElementById("image1");
elem.onclick = function(){
    alert( elem.getAttribute('src') )
};
let elem1 =document.getElementById("image2");
let function1 = function(){ alert(elem.getAttribute('src'))
}
elem1.addEventListener('click', function1 )

input.onclick = function() { alert(1) }
function handleMouseOver(event) {
    const link = event.target;
    const text = link.textContent;
    link.setAttribute('title', text);
  }
  function handleMouseOut(event) {
    const link = event.target;
    link.setAttribute('title', '');
  }
  
const link1 = document.getElementById('image1');
const link2 = document.getElementById('image2');
const link3 = document.getElementById('image3');

image1.addEventListener('mouseover', handleMouseOver);
image1.addEventListener('mouseout', handleMouseOut);

image2.addEventListener('mouseover', handleMouseOver);
image2.addEventListener('mouseout', handleMouseOut);

image3.addEventListener('mouseover', handleMouseOver);
image3.addEventListener('mouseout', handleMouseOut);


