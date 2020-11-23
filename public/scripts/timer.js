let seconds = 0;
let minutes = 0;
let hours = 0;

//let secs = 0;
//let mins = 0;
//let hrs = 0;

var currentTimer = 0,
interval = 0,
lastUpdateTime = new Date().getTime()
var dt = 0;
var running = false;

function pad (n) {
    return ('00' + n).substr(-2);
}

function update () {
    seconds++;

    if(seconds == 60) {
        minutes++;
        seconds = 0;
    }

    if(minutes == 60) {
        hours++;
        minutes = 0;
    }

    document.getElementById('hrs').innerHTML = pad(hours);
    document.getElementById('mins').innerHTML = pad(minutes);
    document.getElementById('secs').innerHTML = pad(seconds);

    lastUpdateTime = now;
}

function startTimer () {
    if(!running) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 1);
    }
}

function stopTimer () {
    clearInterval(interval);
    interval = 0;
}

function resetTimer () {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('hrs').innerHTML = pad(0);
    document.getElementById('mins').innerHTML = pad(0);
    document.getElementById('secs').innerHTML = pad(0);
}