const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var min = 0;
var sec = 0;
var ten_millsec = 0; 
var counter = 0;

var timer;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(num) {
    if (num <= 9) {
        num = "0" + num;
    }

    return num;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    counter++; 
    ten_millsec = counter % 100;
    sec = Math.floor(counter / 100);
    sec = sec % 60;
    min = Math.floor(counter / 6000); 

    theTimer.innerHTML = leadingZero(min) + ":" + leadingZero(sec) + ":" + leadingZero(ten_millsec);
}

// Match the text entered with the provided text on the page:
function matchText() {
    if (testArea.value === originText) {
        // Green
        testWrapper.style.borderColor = "green";
        clearInterval(timer);
    } else {
        if (testArea.value === originText.substring(0, testArea.value.length)) {
            // Blue
            testWrapper.style.borderColor = "blue";
        } else {
            // Yellow
            testWrapper.style.borderColor = "yellow";
        }
    }
}

// Start the timer:
function startTimer() {
    if (testArea.value.length === 0) {
        console.log("startTimer triggered")
        timer = setInterval(runTimer, 10); 
    }
}

// Reset everything:
function resetEverything() {
    clearInterval(timer);
    min, sec, ten_millsec = 0;
    counter = 0;

    theTimer.innerHTML = "00:00:00"; 
    testWrapper.style.borderColor = "grey"; 
    testArea.value = ""; 
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer, false); 
testArea.addEventListener("keyup", matchText, false);
resetButton.addEventListener("click", resetEverything, false); 