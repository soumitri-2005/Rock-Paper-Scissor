let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock" ,"paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    // here this random function will give any value betwwen 0, 1 or 2
    return options[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "rgb(234, 161, 66)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("User choice", userChoice);
    const compChoice = generateCompChoice();
    // console.log("comp choice ", compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
