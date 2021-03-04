var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var bodyElement = document.querySelectorAll("body")
var pElement = document.getElementsByTagName("p");
window.addEventListener("resize", function getSize(){
    pElement[1].innerHTML = "Width: " + width + " Height:" + height;
})
