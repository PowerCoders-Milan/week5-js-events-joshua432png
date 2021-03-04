// define your functions here
//var a = document.querySelector("a";)
var a = document.querySelector("a");
var elements = document.querySelectorAll("strong");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
function changeColor(){
    for (var i= 0; i < elements.length; i++) {
        elements[i].style.color = `#${randomColor}`;
    }
};
a.addEventListener("mouseenter", changeColor);

function changeBack(){
    for (var i =0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }
}
a.addEventListener("mouseleave", changeBack);



// Collect all <strong> tags


// call the functions and connect them to an event
