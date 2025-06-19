const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const generateCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin ,userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Comp Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "black"
    }
} 
const playGame = (userChoice) => {
    let compChoice = generateCompChoice();
    let userWin;
    if(compChoice === userChoice){
        msg.innerText = "Draw!!";
        msg.style.backgroundColor = "#31572c"
        return;
    }else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }else{
            userWin = compChoice === "rock" ? false : true
        }
    }
    showWinner(userWin, userChoice, compChoice);
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
})

