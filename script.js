let time = document.getElementById("time-left")

function updateTimerDisplay(minutes, seconds) {
    time.innerText = `${minutes}:${seconds}`
}

updateTimerDisplay(15, 10)