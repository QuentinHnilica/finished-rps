// We need to create variables rock, paper and scissors
//We need to be able to input a value
// Once a value is inputted then we want to run a function to get the CPUs Option (random Generator)
//Then we need to create conditionals to value who won and lost
//Once determined console.log either you "Congrats you Won this round" or "You lost this round"



//defining the values that the cpu will be able to reference
var choices = ['rock', 'paper', 'scissors']
var cpuNumber 
var userChoice
var wins = 0
var loses = 0
var ties = 0
// function determinOutCome(){
//    if (userChoice === 'paper'){
//     if(cpuChoice === 'paper'){
//         alert('Tie Game')
//     }
//     else if (cpuChoice == 'rock'){
//         alert('You Won!')
//     }
//     else{
//         alert('You Lose')
//     }   
//    }
//    else if(userChoice === 'rock'){
//     if(cpuChoice === 'paper'){
//         alert('You Lose')
//     }
//     else if (cpuChoice == 'rock'){
//         alert('TieGame')
//     }
//     else{
//         alert('You Win!')
//     }  
//    }
//    else{
//     if(cpuChoice === 'paper'){
//         alert('You Win!')
//     }
//     else if (cpuChoice == 'rock'){
//         alert('You Lose')
//     }
//     else{
//         alert('Tie Game')
//     }  
//    }
// }

function DisplayScore(){
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Loses").innerHTML = "Loses: " + loses;
    document.getElementById("Ties").innerHTML = "Ties: " + ties;
}

function Compare(){
    if (userChoice == 0){
        if (cpuNumber == 2){
            document.getElementById("DidYouWin").innerHTML = "You Won!"
            wins += 1
        }
        else{
            document.getElementById("DidYouWin").innerHTML = "You Lose!"
            loses += 1
        }    
    }
    else if (userChoice == 1){
        if (cpuNumber == 0){
            document.getElementById("DidYouWin").innerHTML = "You Won!"
            wins += 1
        }
        else{
            document.getElementById("DidYouWin").innerHTML = "You Lose!"
            loses += 1
        }      
    }
    else{
        if (cpuNumber == 1){
            document.getElementById("DidYouWin").innerHTML = "You Won!"
            wins += 1
        }
        else{
            document.getElementById("DidYouWin").innerHTML = "You Lose!"
            loses += 1
        }      
    }
    DisplayScore()
}
function newDeterminOutCome(){
    if (userChoice === cpuNumber){
        document.getElementById("DidYouWin").innerHTML = "Tie Game!"
        ties += 1
        DisplayScore()
    }
    else{
        Compare()
    } 
}

function getCpuChoice (){
    cpuNumber = Math.floor((Math.random() * 3));
    document.getElementById("CPUChoice").innerHTML = "The Computer Has Chosen " + choices[cpuNumber];
    newDeterminOutCome();
}

//this prints the computers choice accturaly

function getUserChoice (ourChoice) {
    userChoice = ourChoice
    getCpuChoice();
}
