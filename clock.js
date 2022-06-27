setInterval(()=>{
    const date = new Date();

    let hr = document.querySelector('.hr')
    let min = document.querySelector('.min')
    let sec = document.querySelector('.sec')
    
    hr.innerHTML = date.getHours()  + " : ";
    min.innerHTML = date.getMinutes() + " : ";
    sec.innerHTML = date.getSeconds();
})
