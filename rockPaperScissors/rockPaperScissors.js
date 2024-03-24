let pScore = 0;
let cScore = 0;

const winScore = 3;

let options = ["rock", "paper", "scissors"];
let playerSelection = '';

var sleepSetTimeout_ctrl;

function sleep(ms) {
    clearInterval(sleepSetTimeout_ctrl);
    return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
}

function checkScores() {
    const container = document.querySelector("#container");
    let gameOverScreen = document.createElement("div");
    gameOverScreen.classList.add("gameOver");
    if (pScore == winScore) {
        gameOverScreen.style.color = "cornflowerblue";
        gameOverScreen.textContent = "YOU WIN!";
    } else if (cScore == winScore) {
        gameOverScreen.style.color = "crimson";
        gameOverScreen.textContent = "YOU LOSE!"
    } else {
        return;
    }
    container.append(gameOverScreen);
    exit();
}

function playRound(target) {
    let computerSelection = '';
    playerSelection = getPlayerSel(target);
    computerSelection = options[Math.floor(Math.random()*options.length)];
    chooseWinner(playerSelection, computerSelection);
    updateScore();
    playAnimate(target, computerSelection);
    playerSelection = '';
}

function updateScore() {
    const pVal = document.querySelector("#pVal");
    const cVal = document.querySelector("#cVal");

    pVal.textContent = "YOU: " + pScore.toString();
    cVal.textContent = "CPU: " + cScore.toString();

    console.log(1);
}

async function playAnimate(target, comChoice) {
    
    const btns = document.querySelectorAll(".iconBtn");
    btns.forEach((btn) => {
        if(btn.id != target) {btn.style.transition = "all 0.1s ease-in-out";}
        btn.style.transform = "scale(0)";
        setTimeout(() => { btn.style.visibility = "hidden"; }, 200);
    });

    await sleep(300);

    const showdownContainer = document.querySelector("#showdownContainer");

    let targetLen = target.length;
    let playerChoice = target.substring(0, targetLen-4);

    let leftHandImgPath = "assets/"+playerChoice+"Hand.png";
    let leftHand = document.createElement("img");
    leftHand.src = leftHandImgPath;
    leftHand.classList.add("enterLeft");

    let rightHandImgPath = "assets/"+comChoice+"Hand.png";
    let rightHand = document.createElement("img");
    rightHand.src = rightHandImgPath;
    rightHand.classList.add("enterRight");

    showdownContainer.append(leftHand);
    showdownContainer.append(rightHand);

    await sleep(1500);

    leftHand.classList.add("leaveScreen");
    rightHand.classList.add("leaveScreen");
     
    await sleep(1900);

    showdownContainer.removeChild(leftHand);
    showdownContainer.removeChild(rightHand);

    checkScores();

    btns.forEach((btn) => {
        btn.style.transition = "all 0.5s ease-in-out";
        btn.style.transform = "scale(1)";
        setTimeout(() => { btn.style.visibility = "visible"; }, 200);
    });

}

function getPlayerSel(target) {

    let targetLen = target.length;
    let choice = target.substring(0, targetLen-4);

    return choice;
}

function chooseWinner(a, b) {
    console.log("You chose " + a)
    console.log("Computer chose " + b)
    if (a==b) {
        console.log("DRAW");
        return;
    } else if ((a=="rock" && b == "scissors") || (a=="scissors" && b=="paper") || (a=="paper" && b=="rock")) {
        console.log("Player wins round")
        pScore++;
        return;
    } else {
        console.log("Computer wins round")
        cScore++;
        return;
    }
}

function setUpButtons() {
    const btns = document.querySelectorAll(".iconBtn");
    btns.forEach((btn) => 
        btn.addEventListener("click", (e) => {
            playRound(e.target.id);
        })
    );
}

setUpButtons();