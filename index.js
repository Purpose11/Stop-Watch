const  timer = document.querySelector('.timer')
const playBtn = document.querySelector('.playBtn')
const resetBtn = document.querySelector('.resetBtn')


let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

let myInterval; 
let timerStatus = "stopped"

function stopWatch (){
    seconds++;

    if(seconds === 60){
        seconds = 0
        minutes++
        
        if (minutes === 60){
            minutes = 0;
            hours++
        }
    }
    

        if ( seconds < 10){
            leadingSeconds = "0" + seconds.toString()
        }
        else { 
            leadingSeconds = seconds
        }
        
        if ( minutes < 10){
            leadingMinutes = "0" + minutes.toString()
        }
        else { 
            leadingMinutes = minutes
        }
        
        if ( hours < 10){
            leadingHours = "0" + hours.toString()
        }
        else { 
            leadingHours= hours
        }
        
        if ( minutes < 10){
            leadingMinutes = "0" + minutes.toString()
        }
        else { 
            leadingMinutes = minutes
        }
           
            
  


    let display = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
    timer.innerText = display;
  
}    

playBtn.addEventListener("click", function (){
    if (timerStatus === "stopped"){
        myInterval = window.setInterval(stopWatch, 1000)
        playBtn.innerHTML = `<i class="fa-solid fa-pause" id="pauseBtn"> </i>`
        playBtn.style.backgroundColor = 'yellow'
        timerStatus = 'started'
    }
    else {
        window.clearInterval(myInterval);
        playBtn.innerHTML = `<i class="fa-solid fa-play" class="playBtn"></i>`
        playBtn.style.backgroundColor = 'green'
        timerStatus = "stopped"
    }
})
    
resetBtn.addEventListener('click', function (){
    window.clearInterval(myInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.innerText = "00:00:00"
    playBtn.innerHTML = `<i class="fa-solid fa-play" class="playBtn"></i>`
    playBtn.style.backgroundColor = 'green';
})    

       
  