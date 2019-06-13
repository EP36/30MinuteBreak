window.onload = function() {
  //the timer variable stores the inputted minute value
  let timer = prompt('How many minutes between breaks?');
  //the convertedMinutes variable stores the value of the timer converted from minutes to milliseconds
  let convertedMinutes = minutesToMilliseconds(timer);
  //turnOnButton variable stores the element with the id of #turnOn
  const turnOnButton = document.querySelector('#turnOn');
  //the turnTimeOff variable is initially unassigned
  //reassigned when the timer is turned on
  //stores the id returned from setInterval
  //allows us to pass this value to the clearInterval to stop the function from continuously running
  let turnTimerOff;
  //this event handler triggers the takeBreak function
  turnOnButton.addEventListener('click', function() {
    turnTimerOff = takeBreak(convertedMinutes);
  })
  //turnOffButton variable stores the element with the id of #turnOff
  const turnOffButton = document.querySelector('#turnOff');
  turnOffButton.addEventListener('click', function (){
    //We pass clearInterval the id returned from the setInterval invocation
    clearInterval(turnTimerOff);
  })
  //takeBreak function invokes setInterval and passes an alert as a function and a time to indicate how often to execute it
  function takeBreak(time) {
    //We have to return the id returned from the invocation of setInterval
    return setInterval(function() {alert("Take a break!")}, time)
  }
}
  //minutesToMilliseconds converts minutes to milliseconds
  function minutesToMilliseconds (minutes){
    return minutes * 60000;
  }

//How can I take input from HTML???
  //I'll need to create input field in HTML first
  //Select that input field via id
  //Save selected input to variable
  //Use .select method on variable
  //Use document.execCommand method and pass it string of 'copy'
  //Should be able to access it at variable.value