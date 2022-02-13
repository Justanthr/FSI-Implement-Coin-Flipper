//coin
let totalFlips = 0
let totalHeads = 0
let totalTails = 0

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
})