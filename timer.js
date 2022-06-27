let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let start = document.querySelector('.start')

hour.innerHTML=prompt("Please Enter the number of hours you want")
if(hour.innerHTML===""){hour.innerHTML=0}

min.innerHTML=prompt("Please Enter the number of minutes you want")
if(min.innerHTML===""){min.innerHTML=0}

sec.innerHTML=prompt("Please Enter the number of seconds you want")
if(sec.innerHTML===""){sec.innerHTML=0}

function decrease(){
  hour.innerHTML == 0 && min.innerHTML == 0 && sec.innerHTML == 0 ? (hour.innerHTML = 0 , min.innerHTML = 0 , sec.innerHTML = 0) : 

  hour.innerHTML >= 1 && min.innerHTML==0 && sec.innerHTML==0 ? ( hour.innerHTML--, min.innerHTML=59, sec.innerHTML=59 ) :  

  sec.innerHTML == 0 ? (min.innerHTML-- , sec.innerHTML=59) : sec.innerHTML-- 
}

start.addEventListener('click', e=>{

 const si = setInterval(decrease,1000)
}, {once:true})
