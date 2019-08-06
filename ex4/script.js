// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"




var button = document.getElementById("myButton");
var boxcolor = document.getElementsByClassName("box");

button.addEventListener('click', function(){
    
     for (var i = 0; i < boxcolor.length; i++){
        boxcolor[i].style.backgroundColor = "blue";
     }
 
 })