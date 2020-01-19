let hourhand = document.getElementById("hour");
let minutehand = document.getElementById("minute");
let secondhand = document.getElementById("second");

function getTime() {
    // Get the current time
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds(); 

    // Calculate the angles 
    let secondAngle = second*6; 
    let minuteAngle = minute*6 + second/10;
    let hourAngle = hour*30 + minute/2;

    // Rotate the hands
    hourhand.style.transform = `rotate(${hourAngle}deg)`;
    minutehand.style.transform = `rotate(${minuteAngle}deg)`;
    secondhand.style.transform = `rotate(${secondAngle}deg)`;
}

// Move the clock every second
setInterval(getTime, 1000);