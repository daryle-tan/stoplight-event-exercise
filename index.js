let trafficLight = document.getElementById('trafficLight');
let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');

stopButton.addEventListener('click', () => {
  stopLight.classList.toggle('stop'); 
});

slowButton.addEventListener('click', () => {
  slowLight.classList.toggle('slow');
});

goButton.addEventListener('click', () => {
  goLight.classList.toggle('go');
}); 

[stopButton, slowButton, goButton].forEach((button) => {
  button.addEventListener('mouseenter', (event) => {
    console.log(`Entered ${event.target.innerText} button`); 
  })
  button.addEventListener('mouseleave', (event) => {
    console.log(`Left ${event.target.innerText} button`); 
  })
});

controls.addEventListener('click', (event) => {
  if (event.target.innerText === 'Stop') {
    stopLight.className === 'bulb' ? console.log(`"${event.target.innerText} bulb off"`) : console.log(`"${event.target.innerText} bulb on"`);
  console.log(event)
  } else if (event.target.innerText === 'Slow') {
    slowLight.className === 'bulb' ? console.log(`"${event.target.innerText} bulb off"`) : console.log(`"${event.target.innerText} bulb on"`);
  } else {
    goLight.className === 'bulb' ? console.log(`"${event.target.innerText} bulb off"`) : console.log(`"${event.target.innerText} bulb on"`);
  }
});