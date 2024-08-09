let timeInput = document.querySelector('#timer-container');
let timeInput2 = document.querySelector('#timer-container2');
function startTimer() {
if (timeInput2 === 0) {
    timeInput2 = 59;
}
}
setInterval(()=>{timeInput2--},1000)