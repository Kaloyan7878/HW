let timeInput = 0;
function TimerWorking() {
    timeInput--;
    console.log(timeInput);
    
}
setTimeout(()=>timeInput = 59,1000)
setInterval(TimerWorking, 1000)
let IntervalID = setInterval(TimerWorking, 1000)
if (timeInput===0) clearInterval(IntervalID)