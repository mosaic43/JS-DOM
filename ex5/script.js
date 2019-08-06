// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp





var button = document.getElementById("myButton");


button.addEventListener('click', function(){
   
    var createbox = document.createElement("div");
createbox.setAttribute("class", "box");
var bcontainer = document.getElementById("boxContainer"); 
    bcontainer.appendChild(createbox);
        

console.log(boxContainer);
})





// var button = document.getElementById("myButton");
// var createbox = document.createElement("div");
// createbox.setAttribute("class", "box");

// button.addEventListener('click', function(){
//     var bcontainer = document.getElementById("boxContainer"); bcontainer.appendChild(createbox);
    
//     for (var i = 0; i < bcontainer.length; i++){
//         bcontainer[i].classList.add("box");
//      }
   

// console.log(boxContainer);
// })






