const add = document.querySelector('.add');
const input = document.querySelector('.inputs');
const setBtn = document.querySelector('.set-btn');
const inpHr = document.querySelector('.input-hours');
const inpMin = document.querySelector('.input-minutes');
const alarm = document.querySelector('.alarms');
const hour = document.querySelector('.hr3');
const minutes = document.querySelector('.min3');

add.addEventListener('click', e=>{
    input.style.display="initial"
    add.style.display="none"
    
})

setBtn.addEventListener('click', e=>{

    hour.innerText = inpHr.value;
    minutes.innerText = inpMin.value;

    if(inpHr.value > 12 && inpMin.value > 60){
        alert("Please input the appropriate values")
    }
    else{

        if (inpHr.value == 0 && inpMin.value == 0) {

            input.style.display="initial";
            add.style.display="none";
            alarm.style.display="none";
            alert("Please enter the values to proceesd further")
           
        }
        else {
    
        input.style.display="none"
        add.style.display="none"
        alarm.style.display="initial"
    
        }
    }
    
    
    
})