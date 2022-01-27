

let size = 10; // font size 10px
const btn = document.querySelector("button"); // querySelector button 
const items = document.querySelectorAll("li"); // querySelectro all "li"

btn.addEventListener('click', function() { // Listener on click
        size++; 
    for (let i = 0; i < items.length; i++) { // forEach
        items[i].style.display = "block"; // change style
        items[i].style.fontSize = size +"px";  // change style
    }})
    