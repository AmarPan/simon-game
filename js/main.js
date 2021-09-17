/*
    Name: Amar Panjwani
    Title: Simon Game (GA SEI Project 1)
    Email: amar.panjwani@gmail.com
    Date: 9/16/21
*/

let compChoices = [];
let playerChoices = [];
let livesLeft;
let playerTurn;
let pushStatus;
let wrongAnswer;
let repeat;

btnTry.addEventListener("click", function(){
    tryAgain(compChoices, playerChoices)
});

btnPink.addEventListener("click", function(){
    clickColor("hotpink", "btnPink", "pink", compChoices, playerChoices)
});

btnGreen.addEventListener("click", function(){
    clickColor("limegreen", "btnGreen", "green", compChoices, playerChoices)
});

//btnBlue.addEventListener("click", clickBlue);
btnBlue.addEventListener("click", function(){
    clickColor("aqua", "btnBlue", "blue", compChoices, playerChoices)
});

//btnYellow.addEventListener("click", clickYellow);
btnYellow.addEventListener("click", function(){
    clickColor("yellow", "btnYellow", "yellow", compChoices, playerChoices)
});

btnNext.addEventListener("click", function(){
    nextLevel(compChoices, playerChoices)
});

btnStart.addEventListener("click",function(){
    init(compChoices, playerChoices)
});

btnCheck.addEventListener("click",function(){
    checkAnswer(compChoices, playerChoices);
});

function init(compArr, playerArr){
    clearArray(compArr);
    clearArray(playerArr);
    livesLeft = 3;
    playerTurn = false;
    pushStatus = false;
    wrongAnswer = false;
    repeat = false;
    document.querySelector("#left").innerHTML = livesLeft;
    clearStatus();
    refreshCurrentSelection();
    compTurn(compArr, playerArr);
}

function clickColor(shade, btnName, color, compArr, playerArr){
    document.getElementById(btnName).style.backgroundColor = shade;
    setTimeout(function(){
        document.getElementById(btnName).style.backgroundColor = "black";
    },300);
    if(playerTurn){
        playerArr.push(shade);
        let ol = document.querySelector("ol");
        let li = document.createElement("li");
        li.innerHTML = color;
        ol.appendChild(li);
    }else if(!playerTurn && pushStatus){
        compArr.push(shade);
    }
}

function compTurn(compArr, playerArr){
    let delay = 1500;
    changeTurnStatus(0);
    for(let i = 0; i < compArr.length; i++){
        if(compArr[i] === "hotpink"){
            setTimeout(function(){
                clickColor("hotpink","btnPink", "pink", compArr, playerArr)
            },delay)
        }
        else if(compArr[i] === "limegreen"){
            setTimeout(function(){
                clickColor("limegreen","btnGreen", "green", compArr, playerArr)
            },delay)
        }
        else if(compArr[i] === "aqua"){
            setTimeout(function(){
                clickColor("aqua","btnBlue", "blue", compArr, playerArr)
            },delay)
        }else{
            setTimeout(function(){
                clickColor("yellow","btnYellow", "yellow", compArr, playerArr)
            },delay)
        }
        delay = delay + 750;
    }
    setTimeout(function(){
        addCompChoice(compChoices, playerChoices)
    },delay);
}

function addCompChoice(compArr, playerArr){
    let next = genRandColor();
    pushStatus = true;
        if(next === 0){
            clickColor("hotpink", "btnPink", "pink", compArr, playerArr);
        }else if(next === 1){
            clickColor("limegreen", "btnGreen", "green", compArr, playerArr);
        }else if(next === 2){
            clickColor("aqua", "btnBlue", "blue", compArr, playerArr);
        }else{
            clickColor("yellow", "btnYellow", "yellow", compArr, playerArr);
        }
    playerTurn = true;
    changeTurnStatus(1);
}

function checkAnswer(compArr, playerArr){
    for(let i = 0; i < compArr.length; i++){
        if(compArr[i] !== playerArr[i] || compArr.length !== playerArr.length){
            document.querySelector("#status").style.color = "red";
            document.querySelector("#status").innerHTML = "Wrong answer! Click 'Try Again' to use another life.";
            wrongAnswer = true;
            if(wrongAnswer = true && livesLeft <= 0){
                document.querySelector("#status").style.color = "red";
                document.querySelector("#status").innerHTML = "Wrong! No lives remaining.<br>GAME OVER!"
            }
            break;
        }
        else{
            document.querySelector("#status").style.color = "limegreen";
            document.querySelector("#status").innerHTML = "Correct! Click 'Next Level' to move on.";
            wrongAnswer = false;
            if(playerArr.length === 7)
            {
                document.querySelector("#status").innerHTML = "You got 7 correct! You win!";
            }
        }
    }
}

function nextLevel(compArr, playerArr){
    clearStatus();
    clearArray(playerArr);
    changeTurnStatus(0);
    refreshCurrentSelection();
    pushStatus = false;
    changeTurn()
    compTurn(compArr, playerArr)
}

function tryAgain(compArr, playerArr){
    livesLeft = livesLeft - 1;
    if(livesLeft > -1){
        document.querySelector("#left").innerHTML = livesLeft;
        clearStatus();
        clearArray(playerArr);
        refreshCurrentSelection();
    }
}

function genRandColor(){
    let rand = Math.random() * (3 - 0 + 1) + 0;
    let randRound = Math.floor(rand)
    return randRound;
}

function clearArray(playerArr){
    playerArr.length = 0;
}

function changeTurn(){
    playerTurn = !playerTurn;
}

function changeTurnStatus(status){
    if(status === 0){
        document.querySelector("#turn").innerHTML = "COMPUTER'S TURN"
        document.querySelector("#turn").style.color = "red";
    }else if(status === 1){
        document.querySelector("#turn").innerHTML = "PLAYER'S TURN"
        document.querySelector("#turn").style.color = "limegreen";
    }
}

function refreshCurrentSelection(){
    document.querySelector("ol").remove();
    let ol = document.createElement("ol");
    let aside = document.querySelector("#selectionParent");
    aside.appendChild(ol);
}

function clearStatus(){
    document.querySelector("#status").innerHTML = "";
}