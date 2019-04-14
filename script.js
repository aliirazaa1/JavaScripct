var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var intervalTime;
var timer = false;
var currentTime = minutes + ' : ' + seconds + ' : ' + miliSeconds;
var stopWatch = document.getElementById('stopwatch');
stopWatch.innerHTML = currentTime;
// hours + ' : ' + 
function startTimer() {
    if (timer !== true) {
        intervalTime = setInterval(updateTime, 100);
    }
}

function updateTime() {
    timer = true;
    if (miliSeconds < 9) {
        miliSeconds++;
        currentTime = minutes + ' : ' + seconds + ' : ' + miliSeconds;
        stopWatch.innerHTML = currentTime;
    }
    else if (seconds < 59) {
        miliSeconds = 0;
        seconds++;
        currentTime = minutes + ' : ' + seconds + ' : ' + miliSeconds;
        stopWatch.innerHTML = currentTime;
    }
    else if (minutes < 59) {
        miliSeconds = 0;
        seconds = 0;
        minutes++;
        currentTime = minutes + ' : ' + seconds + ' : ' + miliSeconds;
        stopWatch.innerHTML = currentTime;
    }
    // else {
    //     miliSeconds = 0;
    //     seconds = 0;
    //     minutes = 0;
    //     hours++;
    //     currentTime = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + miliSeconds;
    //     stopWatch.innerHTML = currentTime;
    // }
}

function stopTimer() {
    clearInterval(intervalTime);
    timer = false;
}

function resetTimer() {
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    // hours = 0;
    currentTime = minutes + ' : ' + seconds + ' : ' + miliSeconds;
    stopWatch.innerHTML = currentTime;
    stopTimer();
    timer = false;
}