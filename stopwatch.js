//define variables for original time
let sec = 0;
let min = 0;
let hour = 0;
//variablrs to hold displayed time to user
let dsec = 0;
let dmin = 0;
let dhour = 0;
//var to hold setinterval
let interval = null;
//var to hold status
let status = "stopped";


//
function stopwatch() {
    sec++;
    if (sec / 60 == 1) {
        min++;
        sec = 0;
        if (min / 60 == 1) {
            hour++;
            min = 0;
        }
    }
    if (sec < 10) {
        dsec = "0" + sec.toString();
    } else {
        dsec = sec;
    }
    if (min < 10) {
        dmin = "0" + min.toString();
    } else {
        dmin = min;
    }
    if (hour < 10) {
        dhour = "0" + hour.toString();
    } else {
        dhour = hour;
    }
    // displaying values to user
    document.getElementById("dis").innerHTML = dhour + ":" + dmin + ":" + dsec;

}


function startstop() {
    if (status == "stopped") {
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("start").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    document.getElementById("dis").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start";

}