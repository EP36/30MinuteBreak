window.onload = function() {
  let counter = 2;
  const turnOnButton = document.querySelector('#turnOn');
  turnOnButton.addEventListener('click', function() {
      takeBreak(5000);
  })

  function takeBreak(time) {
    setInterval(function() {alert("Take a break!")}, time)
  }

  // const turnOffButton = document.querySelector('#turnOff');
  // turnOffButton.addEventListener('click', function() {clearInterval(takeBreak)})

}