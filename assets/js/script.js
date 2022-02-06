//coin
let totalFlips = 0
let totalHeads = 0
let totalTails = 0
//dice
let totalRolls = 0
let totalOne = 0
let totalTwo = 0
let totalThree = 0
let totalFour = 0
let totalfive = 0
let totalFive = 0
let totalSix = 0

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
 //Elements
 //Buttons
 let rollBtn = document.querySelector('.roll-btn')
 let clDiceBtn = document.querySelector('.cl-dice-btn')
 //Score Cells
 let rollCount = document.querySelectorAll('#rolled')
 let rollPerc = document.querySelectorAll('#perc')
 //Roll Button Function
 rollBtn.addEventListener('click', function(){
     totalRolls++
     console.log('clicked')
 })

 console.log(`hi`)
 })