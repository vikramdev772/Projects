
function SwitchOn(){
    document.getElementById("bulbImage").src = "bulb-go-on-img.png";
    document.getElementById("catImage").src="cat-img.png";
    document.getElementById("ofS").style.backgroundColor = "#22c55e";
    document.getElementById("onS").style.backgroundColor = "#cbd2d9";
    document.getElementById("x").textContent = "Switch off";
    
    
}
function SwitchOff(){
    document.getElementById("bulbImage").src = "bulb-go-off-img.png "
    document.getElementById("catImage").src="cat-eyes-img.png";
    document.getElementById("x").textContent = "Switch on";
    document.getElementById("ofS").style.backgroundColor = "#e12d39";
    document.getElementById("onS").style.backgroundColor = "#22c55e";
}

// function SwitchOn(){
//     document.getElementById("ofS").style.backgroundColor = "#22c55e";
//     document.getElementById("onS").style.backgroundColor = "#cbd2d9";


// }

