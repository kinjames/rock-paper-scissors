
// const value = document.getElementById('value');
const myArr = ["Rock","Paper","Scissors"]

let result = document.querySelector(".result")
let computerScore = document.querySelector(".computer-score")
let playerScore = document.querySelector(".player-score")
let computerChoice = document.querySelector(".computerChoice")
const btns = document.querySelectorAll(".btn");


let win = "You Won \u{1F973} \u{1F973}\u{1F973} !!"
let lost = "You Lost\u{1F62D}\u{1F62D}\u{1F62D}!!"
let tie = "It's a Tie \u{1F605}\u{1F605}\u{1F605}!!"
let computerCount = 1
let playerCount = 1



btns.forEach (btn =>{
    btn.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;

        if (styles.contains('rock') && randomNumber()===0){
            result.textContent = tie;
            computerChoice.textContent = myArr[0];
        }

        else if (styles.contains('rock') && randomNumber()===1){
            result.textContent = lost;
            computerScore.textContent = computerCount++
            computerChoice.textContent = myArr[1];

        }

        else if (styles.contains('rock') && randomNumber()===2){
            result.textContent = win;
            computerChoice.textContent = myArr[2];
            playerScore.textContent = playerCount++
        }

        else if (styles.contains('paper') && randomNumber()===0){
            result.textContent = win;
            computerChoice.textContent = myArr[0];
            playerScore.textContent = playerCount++
        }

        else if (styles.contains('paper') && randomNumber()===1){
            result.textContent = tie;
            computerChoice.textContent = myArr[1];
        }

        else if (styles.contains('paper') && randomNumber()===2){
            result.textContent = lost;
            computerChoice.textContent = myArr[2];
            computerScore.textContent = computerCount++
        }

        else if (styles.contains('scissors') && randomNumber()===0){
            result.textContent = lost;
            computerChoice.textContent = myArr[0];
            computerScore.textContent = computerCount++
        }

        else if (styles.contains('scissors') && randomNumber()===1){
            result.textContent = win;
            computerChoice.textContent = myArr[1];
            playerScore.textContent = playerCount++
        }

        else if (styles.contains('scissors') && randomNumber()===2){
            result.textContent = tie;
            computerChoice.textContent = myArr[2];
        }
    })
})


function randomNumber(){
   return Math.floor(Math.random()* myArr.length);
}
