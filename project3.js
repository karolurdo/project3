

let size = 10; 
const btn = document.querySelector("button"); 
const items = document.querySelectorAll("li");



btn.addEventListener('click', function() {
        size++; 
    for (let i = 0; i < items.length; i++){
        items[i].style.display = "block"; 
        items[i].style.fontSize = size +"px"; }})
    