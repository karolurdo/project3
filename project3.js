

let size = 10; 
const btn = document.querySelector("button"); 
const items = document.querySelectorAll("li");

const showLi = function() {
console.log("work");
size++; 
for (let i = 0; i < items.length; i++) { // foreach
    items[i].style.display = "block"; 
    items[i].style.fontSize = size +"px";
}


};

btn.addEventListener('click', showLi); // Listerner