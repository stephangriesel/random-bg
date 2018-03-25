function getNewColour (){
    var symbols, colour;
    symbols = "0123456789abcdef";

    colour = "#";
    for (var i = 0;i<6;i++){
        colour = colour + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = colour;
    document.getElementById("hex").innerHTML = colour;

}