//coin
let totalFlips = 0
let totalHeads = 0
let totalTails = 0
//dice
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
         document.querySelectorAll(`#td${i + 1}`).textContent = allRolls[i]
         document.querySelectorAll(`#td${i + 1}-percent`).textContent = allPercents[i] + '%'
     }
}

//DOM Loaded Function
document.addEventListener('DOMContentLoaded', function () {
 //Coin     
 //Elements
 //Buttons
 let flipBtn = document.querySelector('.flip-btn')
 let clearBtn = document.querySelector('.clear-btn')
 //Score Cells
 let headsCount = document.querySelector('#heads')
 let headsPercent = document.querySelector('#heads-percent')
 let tailsCount = document.querySelector('#tails')
 let tailsPercent = document.querySelector('#tails-percent')
 //Img
 let pennyPic = document.querySelector('.penny-pic')
 //Message
 let flipMessage = document.querySelector('.you-flipped')

 //Flip button event
 flipBtn.addEventListener('click', function(){
     totalFlips++
    //Setting random
    let flipHeads = Math.random() < 0.56248
    if(flipHeads){
        pennyPic.src = 'assets/images/penny-heads.jpg'
        flipMessage.textContent = 'You flipped heads!'
        totalHeads++
        headsCount.textContent = totalHeads
    } else{
        pennyPic.src = 'assets/images/penny-tails.jpg'
        flipMessage.textContent = 'You flipped tails!'
        totalTails++
        tailsCount.textContent = totalTails
    }

    //Percent
    let percHeads = Math.round((totalHeads / totalFlips) * 100)
    let percTails = Math.round((totalTails / totalFlips) * 100)
    headsPercent.textContent = `${percHeads}%`
    tailsPercent.textContent = `${percTails}%`
 })
    
 // Clear Button
 clearBtn.addEventListener('click', function(){
    headsCount.textContent = '0'
    tailsCount.textContent = '0'
    headsPercent.textContent = '0%'
    tailsPercent.textContent = '0%'
    pennyPic.src = '/assets/images/penny-heads.jpg'
    flipMessage.textContent = 'You flipped: Nothing =(('
 })

 //Dice game
 //RollBtn
 let rollBtn = document.querySelector('.roll-btn')
 rollBtn.addEventListener('click', function(){
     //Roll Math.Random
     let rolled = Math.round(Math.random() * 6)
     //Elements
     let rolledMessage = document.querySelector('.you-rolled')
     let rolledImg = document.querySelector('.die-pic')
     //Update allRolls
     allRolls[rolled - 1] += 1
     //Update Message Displayed
     rolledMessage.textContent = `You rolled ${rolled}`
     //Update Image Displayed
     rolledImg.scr = `assets/images/dice${rolled}.png`
     //Update Scoreboard
     updateScoreboard()
 })



 console.log(`hi`)
 })