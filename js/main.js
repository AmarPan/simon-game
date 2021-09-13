let compChoices = [];
let playerChoices = [];

btnPink.addEventListener("click", function(evt){
    playerChoices.push("pink");
    document.getElementById("btnPink").style.backgroundColor = "hotpink";
    setTimeout(function(){
        document.getElementById("btnPink").style.backgroundColor = "black";
    },200);
    console.log("playerChoices:",playerChoices);
});

btnGreen.addEventListener("click", function(evt){
    playerChoices.push("green");
    document.getElementById("btnGreen").style.backgroundColor = "limegreen";
    setTimeout(function(){
        document.getElementById("btnGreen").style.backgroundColor = "black";
    },200);
    console.log("playerChoices:",playerChoices);
});

btnBlue.addEventListener("click", function(evt){
    playerChoices.push("blue");
    document.getElementById("btnBlue").style.backgroundColor = "aqua";
    setTimeout(function(){
        document.getElementById("btnBlue").style.backgroundColor = "black";
    },200);
    console.log("playerChoices:",playerChoices);
});

btnYellow.addEventListener("click", function(evt){
    playerChoices.push("yellow");
    document.getElementById("btnYellow").style.backgroundColor = "yellow";
    setTimeout(function(){
        document.getElementById("btnYellow").style.backgroundColor = "black";
    },200);
    console.log("playerChoices:",playerChoices);
});

function genRandColor(){
    let colors = ["pink", "green", "blue", "yellow"];
    let rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    console.log("Rand:",rand, colors[rand]);
    return colors[rand];
}

function addCompChoice(){
    console.log(compChoices)
    compChoices.push(genRandColor());
    console.log("compChoices:",compChoices)
}

addCompChoice();