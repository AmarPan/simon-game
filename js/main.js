let compChoices = ["pink","green"];
let playerChoices = [];
let playerTurn = false;
let pushStatus = false;

btnPink.addEventListener("click", clickPink);

btnGreen.addEventListener("click", clickGreen);

btnBlue.addEventListener("click", clickBlue);

btnYellow.addEventListener("click", clickYellow);

btnTurn.addEventListener("click", changeTurn)

btnCheck.addEventListener("click",checkAnswer)

function clickPink(){
    document.getElementById("btnPink").style.backgroundColor = "hotpink";
    setTimeout(function(){
        document.getElementById("btnPink").style.backgroundColor = "black";
    },300);
    if(playerTurn && pushStatus){
        playerChoices.push("pink");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(!playerTurn && pushStatus){
        compChoices.push("pink");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }else if(!playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }
}

function clickGreen(){
    document.getElementById("btnGreen").style.backgroundColor = "limegreen";
    setTimeout(function(){
        document.getElementById("btnGreen").style.backgroundColor = "black";
    },300);
    if(playerTurn && pushStatus){
        playerChoices.push("green");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(!playerTurn && pushStatus){
        compChoices.push("green");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }else if(!playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }
}

function clickBlue(){
    document.getElementById("btnBlue").style.backgroundColor = "aqua";
    setTimeout(function(){
        document.getElementById("btnBlue").style.backgroundColor = "black";
    },300);
    if(playerTurn && pushStatus){
        playerChoices.push("blue");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(!playerTurn && pushStatus){
        compChoices.push("blue");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }else if(!playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }
}

function clickYellow(){
    document.getElementById("btnYellow").style.backgroundColor = "yellow";
    setTimeout(function(){
        document.getElementById("btnYellow").style.backgroundColor = "black";
    },300);
    if(playerTurn && pushStatus){
        playerChoices.push("yellow");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"playerChoices:",playerChoices)
    }else if(!playerTurn && pushStatus){
        compChoices.push("yellow");
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }else if(!playerTurn && !pushStatus){
        console.log("playerTurn:",playerTurn,"pushStatus:",pushStatus,"compChoices:",compChoices)
    }
}

function genRandColor(){
    let colors = ["pink", "green", "blue", "yellow"];
    let rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    //console.log("Rand:",rand, colors[rand]);
    return colors[rand];
}

function addCompChoice(){
    let next = genRandColor();
    pushStatus = true;
        if(next === "pink"){
            clickPink();
        }else if(next === "green"){
            clickGreen();
        }else if(next === "blue"){
            clickBlue();
        }else{
            clickYellow();
        }
}

function addPlayerChoice(){

}

function init(){
    compTurn()
}

function changeTurn(){
    playerTurn = !playerTurn;
    console.log("playerTurn:",playerTurn);
}

// compChoices.forEach(function(color){
//     console.log("Color",color)
// })

function compTurn(){
    let delay = 1500;
    for(let i = 0; i < compChoices.length;i++){
        if(compChoices[i] === "pink"){
            console.log("pushStatus:",pushStatus)
            setTimeout(clickPink,delay)
        }
        else if(compChoices[i] === "green"){
            setTimeout(clickGreen,delay)
        }
        else if(compChoices[i] === "blue"){
            setTimeout(clickBlue,delay)
        }else{
            setTimeout(clickYellow,delay)
        }
        //console.log("Delay:",delay);
        delay = delay + 750;
    }
    //pushStatus = true;
    //delay = delay + 750;
    setTimeout(addCompChoice,delay);
}

function checkAnswer(){
    for(let i = 0; i < compChoices.length;i++){
        if(compChoices.length !== playerChoices.length){
            document.querySelector("#status").innerHTML = "Wrong answer, try again!";
            break;
        }else if(compChoices[i] === playerChoices[i]){
            console.log("Correct match at Index:",i);
        }
        else{
            console.log("Wrong match at Index:",i);
            document.querySelector("#status").innerHTML = "Wrong answer, try again!";
            break;
        }
    }
    document.querySelector("#status").innerHTML = "Correct! Nice job! Click 'Next Level' to move on";
}

init();