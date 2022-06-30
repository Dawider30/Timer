let check = null


document.addEventListener("change", getValue)

    let isClicked = false

function getValue(){
    const timer = document.getElementById('minutesTime').value

    let startingMinutes = Math.round(timer)

    let time = startingMinutes * 60;

const start = document.getElementById('start')
const stop = document.getElementById('stop')

const countdownEl = document.getElementById('countdown')

start.addEventListener('click', () => {

    if(isClicked) return
    else{
        isClicked = true
        
      check = setInterval(updateCountdown, 1000)}
      })

function updateCountdown() {

    if(time<=0){
        countdownEl.innerText = 'done'
        setTimeout(() => {
            window.location.reload()
            
        }, 6000);
        return
    }

    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdownEl.innerText = `${minutes}:${seconds}`

    time--;
    

}
stop.addEventListener('click', () => {
    clearInterval(check)
    check = null
    countdownEl.innerText = 'stoped'
    isClicked = false
})

}


