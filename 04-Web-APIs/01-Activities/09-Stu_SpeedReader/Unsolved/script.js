var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var split = poem.split(" ");

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 5;
var readInterval = 500;


function prepareRead() {
  var reaIntervalStr = prompt("How fast do you want to read?")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till reading.";
  
    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      speedRead();
      }
  
   }, 1000);
  }
  
  // Create the countdown timer.}

function speedRead() {
  
  console.log("speed read now")
  // Print words to the screen one at a time.
}
prepareRead();