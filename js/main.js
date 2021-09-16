let compChoices = [];
let playerChoices = [];
let playerTurn = false;
let pushStatus = false;
let livesLeft = 3;
let test = ["monks"]
let test2 = 3;

btnTry.addEventListener("click",tryAgain)

btnPink.addEventListener("click", function(){
    clickColor("hotpink", "btnPink", "pink", compChoices, playerChoices)
});

//btnGreen.addEventListener("click", clickGreen);
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

btnCheck.addEventListener("click",checkAnswer);

// DONE
function clickColor(shade, btnName, color, compArr, playerArr){
    document.getElementById(btnName).style.backgroundColor = shade;
    setTimeout(function(){
        document.getElementById(btnName).style.backgroundColor = "black";
    },300);
    if(playerTurn){
        console.log("compChoices:",compChoices);
        console.log("playerChoices:",playerChoices);

        playerArr.push(shade);

        console.log("compChoices:",compChoices);
        console.log("playerChoices:",playerChoices);
        let ol = document.querySelector("ol");
        let li = document.createElement("li");
        li.innerHTML = color;
        ol.appendChild(li);
    }else if(!playerTurn && pushStatus){
        console.log("compChoices:",compChoices);
        console.log("playerChoices:",playerChoices);
        compArr.push(shade);

        console.log("compChoices:",compChoices);
        console.log("playerChoices:",playerChoices);
    }
}

// DONE
function genRandColor(){
    let rand = Math.random() * (3 - 0 + 1) + 0;

    console.log("rand1:",rand)

    let randRound = Math.floor(rand)

    console.log("rand2:",randRound)

    return randRound;
}

// DONE
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

    console.log("playerTurn:",playerTurn);

    let turn = document.querySelector("#turn");
    turn.textContent = "PLAYER'S TURN"
    turn.style.color = "limegreen"
    
}

function init(compArr, playerArr){
    console.log("compChoices:",compChoices);
    console.log("playerChoices:",playerChoices);

    clearArray(compArr);
    //compArr.length = 0;

    console.log("compChoices:",compChoices);
    console.log("playerChoices:",playerChoices);

    clearArray(playerArr);
    //playerArr.length = 0;

    console.log("compChoices:",compChoices);
    console.log("playerChoices:",playerChoices);
    compTurn(compArr, playerArr);

}

function clearArray(playerArr){
    playerArr.length = 0;
}

function changeTurn(){
    playerTurn = !playerTurn;
    console.log("playerTurn:",playerTurn);
}

// compChoices.forEach(function(color){
//     console.log("Color",color)
// })

function compTurn(compArr, playerArr){
    let delay = 1500;
    document.querySelector("#turn").innerHTML = "COMPUTER'S TURN"
    document.querySelector("#turn").style.color = "red";
    let temp = compArr;
    for(let i = 0; i < compArr.length; i++){
        if(compArr[i] === "hotpink"){
            //console.log("pushStatus:",pushStatus)
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
        //console.log("Delay:",delay);
        delay = delay + 750;
    }
    //pushStatus = true;
    //delay = delay + 750;
    setTimeout(function(){
        addCompChoice(compChoices, playerChoices)
    },delay);
}
    

function checkAnswer(){
    for(let i = 0; i < compChoices.length; i++){
        if(compChoices.length !== playerChoices.length){
            console.log("Lengths of compChoices and playerChoices don't match")
            document.querySelector("#status").innerHTML = "Wrong answer! Click 'try again' to use another life";
            break;
        }else if(compChoices[i] !== playerChoices[i]){
            console.log("Wrong match at Index:",i);
            document.querySelector("#status").innerHTML = "Wrong answer! Click 'try again' to use another life";
            break;
        }
        else if(i === compChoices.length - 1 && compChoices[i] === playerChoices[i]){
            console.log("Correct!");
            document.querySelector("#status").innerHTML = "Correct! Nice job! Click 'Next Level' to move on";
        }
    }
    //document.querySelector("#status").innerHTML = "Correct! Nice job! Click 'Next Level' to move on";
}

function nextLevel(compArr, playerArr){
    clearStatus();
    playerChoices = []
    console.log("playerChoices:",playerChoices);
    let turn = document.querySelector("#turn");
    turn.textContent = "COMPUTER'S TURN"
    turn.style.color = "red"
    document.querySelector("ol").remove()
    let li = document.createElement("ol");
    //li.innerHTML = "Current Selection:"
    let aside = document.querySelector("#selectionParent");
    aside.appendChild(li);
    pushStatus = false;
    changeTurn()
    compTurn(compArr, playerArr)
    //changeTurn()
}

function tryAgain(){
    livesLeft = livesLeft - 1;
    document.querySelector("#left").innerHTML = livesLeft;
    clearStatus();
    playerChoices = []
    console.log("playerChoice:",playerChoices)
    document.querySelector("ol").remove()
    let li = document.createElement("ol");
    let aside = document.querySelector("#selectionParent");
    aside.appendChild(li);
}

function removeTest(){
        document.querySelector("ol").remove()
        let li = document.createElement("ol");
        li.innerHTML = "Current Selection:"
        let aside = document.querySelector("aside");
        aside.appendChild(li);

    //document.querySelector("li").innerHTML = "";
}

function clearStatus(){
    document.querySelector("#status").innerHTML = "";
}