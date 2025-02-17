// Update current date and time in real-time
function updateTime() {
    const now = new Date();
    document.getElementById("currentDate").textContent = now.toLocaleDateString("en-US");
    document.getElementById("currentTime").textContent = now.toLocaleTimeString("en-US") + "." + now.getMilliseconds();
}
setInterval(updateTime, 10);

// ---------------------- STOPWATCH ----------------------
let startTime, elapsedTime = 0, stopwatchInterval;
let stopwatchRunning = false;

function updateStopwatch() {
    const currentTime = Date.now() - startTime + elapsedTime;
    document.getElementById("stopwatch").textContent = new Date(currentTime).toISOString().substr(11, 12);
}

function startStopwatch() {
    if (!stopwatchRunning) {
        startTime = Date.now();
        stopwatchInterval = setInterval(updateStopwatch, 10);
        stopwatchRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime += Date.now() - startTime;
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    document.getElementById("stopwatch").textContent = "00:00:00.000";
}

// ---------------------- COUNTDOWN TIMER ----------------------
let remainingTime, timerInterval, timerRunning = false;

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00:00.000";
        alert("⏰ Time's up!");
        return;
    }

    remainingTime -= 10;
    document.getElementById("timer").textContent = new Date(remainingTime).toISOString().substr(14, 9);
}

function startTimer() {
    if (!timerRunning) {
        const minutes = parseInt(document.getElementById("timerMinutes").value) || 0;
        const seconds = parseInt(document.getElementById("timerSeconds").value) || 0;
        remainingTime = (minutes * 60 + seconds) * 1000;
        timerInterval = setInterval(updateTimer, 10);
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "00:00.000";
    timerRunning = false;
}
