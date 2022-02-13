let allRolls = [0, 0, 0, 0, 0, 0]

//Function to update scoreboard
let updateScoreboard = function(){
     let total = allRolls[0] + allRolls[1] + allRolls[2] + allRolls[3] + allRolls[4] + allRolls[5]
     //All Percent
     let allPercents = [0, 0, 0, 0, 0, 0]
     //For loop dice totals
     if (total > 0){
         for (let i = 0; i < allRolls.length; i++){
             //To get Percent
             allPercents[i] = Math.round((allRolls[i] / total) * 100)
         }
     }        
     //For Loop Update Dice Totals
     for (let i = 0; i < allRolls.length; i++){
         document.getElementById(`td${i + 1}`).textContent = allRolls[i]
         document.getElementById(`td${i + 1}-perc`).textContent = allPercents[i] + '%'
     }
}

document.addEventListener('DOMContentLoaded', function(){
 //RollBtn
 let rollBtn = document.querySelector('.roll-btn')
 rollBtn.addEventListener('click', function(){
     //Roll Math.Random
     let rolled = Math.ceil(Math.random() * 6)
     //Elements
     let rolledMessage = document.querySelector('.you-rolled')
     let rolledImg = document.getElementById('die-pic')
     //Update allRolls
     allRolls[rolled - 1] += 1
     //Update Message Displayed
     rolledMessage.textContent = `You rolled ${rolled}`
     //Update Image Displayed
     rolledImg.src = `assets/images/dice/dice${rolled}.png`
     //Update Scoreboard
     updateScoreboard()
  })
  //Clear board button function
 let clearDiceBoard = document.querySelector('.cl-dice-btn')
 clearDiceBoard.addEventListener('click', function(){
     //Reset allRolls
     allRolls = [0, 0, 0, 0, 0, 0]
     //Reset Message
     let rolledMessage = document.querySelector('.you-rolled')
     rolledMessage.textContent = `Click the "Roll" button =)`
     //Update Scorebaord
     updateScoreboard()
  })
})