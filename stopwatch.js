let hr2 = document.querySelector('.hr2')
let min2 = document.querySelector('.min2')
let sec2 = document.querySelector('.sec2')
let start = document.querySelector('.start')
let reset = document.querySelector('.reset')
let stop = document.querySelector('.stop')

function stopwatch(){
  sec2.innerHTML >= 60 ? (sec2.innerHTML=0, min2.innerHTML++) : sec2.innerHTML++
  min2.innerHTML >= 60 ? (min2.innerHTML=0, hr2.innerHTML++) : null
}
start.addEventListener('click', e=>{
    let si = setInterval(stopwatch,1000)
    start.style.display="none"

    stop.addEventListener('click', e=>{
    clearInterval(si) 
    start.style.display="initial" })

    reset.addEventListener('click', e=>{
        hr2.innerHTML = 0; 
        min2.innerHTML = 0;
        sec2.innerHTML = 0;
        clearInterval(si) 
        start.style.display="initial" 
    })    
})
