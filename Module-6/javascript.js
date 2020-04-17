var box = document.getElementById("box");


document.getElementById("grow").addEventListener("click", function(){

    box.style.height = "250px";

});


document.getElementById("makeBlue").addEventListener("click", function(){

    box.style.backgroundColor = "blue";

});


document.getElementById("fade").addEventListener("click", function(){

    box.style.opacity = "0.5"

});


document.getElementById("reset").addEventListener("click", function(){

    box.style.height = "150px";
    box.style.backgroundColor= "orange";
    box.style.opacity= "1"

});