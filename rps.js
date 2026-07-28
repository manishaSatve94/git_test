console.log("hello world!");

// step1 
function getComputerChoice(){
    let randonVal = Math.random();
    if(randonVal < 0.33){
        return "rock";
    } else if(randonVal < 0.66){
        return "paper";
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice());

// step 2

function getHumanChoice(){
    let userInput = prompt("Enter user input");
    return userInput;
}


// step 6
function playGame(){
 // step 4

let humanScore  = 0;
let computerScore  = 0; 
// step 5
 function playRound(humanChoice , computerChoice){

    let human = humanChoice.toLowerCase()
    let computer = computerChoice;


    if (human === computer){
        console.log("both tie");
        return;

    }
    if (human === "rock" && computer === "scissors" ||
        human === "scissors" && computer === "paper" ||
        human === "paper" && computer === "rock"
    ){
        humanScore++;
        console.log("human is winner")
    }

    else{
        computerScore++;
        console.log("computer is winner")
    }
 } 
 
//   function capitalize(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
playRound(getHumanChoice(), getComputerChoice())
console.log('score= your ${humanScore}, & ${computerScore}')


playRound(getHumanChoice(), getComputerChoice())
console.log('score= your ${humanScore}, & ${computerScore}')

playRound(getHumanChoice(), getComputerChoice())
console.log('score= your ${humanScore}, & ${computerScore}')

playRound(getHumanChoice(), getComputerChoice())
console.log('score= your ${humanScore}, & ${computerScore}')

playRound(getHumanChoice(), getComputerChoice())
console.log('score= your ${humanScore}, & ${computerScore}')


if(humanScore > computerScore ){
    console.log("human is winner");
} else if(computerScore > humanScore){
console.log("computer is winner");
}
else{
    console.log("tie between human and compute")
}
}
  
playGame()
