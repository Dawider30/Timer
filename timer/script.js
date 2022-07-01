document.addEventListener("change", getValue)

function getValue(){

//Zdobywanie informacji o czasie

const timer = document.getElementById('minutesTime').value

let startingMinutes = Math.round(timer)

let time = startingMinutes * 60;

//Polaczenie JS z HTML

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

const countdownEl = document.getElementById('countdown')

//flagi

let isClicked = false
let check = null

//funkcje przycisków

start.addEventListener('click', () => {

    if(isClicked) return
    else{
        isClicked = true
        
      check = setInterval(updateCountdown, 1000)}
      })
stop.addEventListener('click', () => {
        clearInterval(check)
        check = null
        countdownEl.innerText = 'stoped'
        isClicked = false
    })
reset.addEventListener('click', () => {
        window.location.reload()
    })

function updateCountdown() {

    if(time<=0){
        countdownEl.innerText = 'done'
        setTimeout(() => {
            window.location.reload()
            
        }, 5000);
        return
    }

    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdownEl.innerText = `${minutes}:${seconds}`

    time--;
}
}


