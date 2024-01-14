let time = 60;
let bubbleBtn
let score = 0

// Selected item
const centerBar = document.querySelector('.center-bar');
const hintDisplay = document.getElementById('hint');


// initilize 
for (let i = 0; i < 80; i++) {
    bubbleBtn = document.createElement('button');
    bubbleBtn.textContent = `${randomNumber()}`
    centerBar.appendChild(bubbleBtn);

}
// Generate Random Number
function randomNumber(randomNumbers) {
   return randomNumbers = Math.floor(Math.random() * 10);
    
}
// Display Time
displayTime();
function displayTime() {
    const timeRun = setInterval(function(){
        const timeDisplay = document.getElementById('time');
        timeDisplay.textContent = time
        time--

        if (time <= -1) {
            clearInterval(timeRun)
            hintDisplay.textContent = 0;
        }else if (time <= 10) {
            timeDisplay.style.color = 'red'
        }
       }, 1000);
    
}
// Generate Hint 
generateHint();
function generateHint() {
    hintDisplay.textContent = randomNumber();
}

// selectAll BubbleBtn
const btns = document.querySelectorAll('button');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const targetBtn = e.currentTarget.textContent;
        if (targetBtn === hintDisplay.textContent) {
            btn.textContent = randomNumber();
            generateHint();
            score++
            scoreDisplay();
            
        }
        else if (time <= -1) {
            hintDisplay.textContent = 0;
        }
    })
})

// Define Scroe
function scoreDisplay() {
     score = document.getElementById('score').textContent = score
    
}