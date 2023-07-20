const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const newYear = document.querySelector('#new-year')

const now = new Date()

newYear.innerHTML =now.getFullYear() + 1

const countToDate = new Date (now.getFullYear()+ 1,0,1).getTime()

const countdown = () =>{
    const now =new Date().getTime()
    const distance = countToDate - now
    
    const days =Math.floor(distance/(1000*60*60*24))
    const hours =Math.floor((distance % (1000*60*60*24))/ (1000*60*60))
    const minutes =Math.floor((distance%(1000*60*60))/(1000*60))
    const seconds =Math.floor((distance% (1000*60))/1000)

    daysSpan.innerHTML = days
    hoursSpan.innerHTML = hours
    minutesSpan.innerHTML= minutes
    secondsSpan.innerHTML= seconds

    if (distance < 0) {
        clearInterval(countdownInteval)
    }
}
countdown()
const countdownInteval = setInterval(countdown,1000)
const fireworks = new Fireworks(fireworkContainer,{
    rocketsPoint: {
        min: 50,
        max: 50
      },
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 0.015,
        max: 0.03
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      lineStyle: 'round',
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      flickering: 50,
      opacity: 0.5,
      explosion: 5,
      intensity: 30,
      traceSpeed: 10,
      autoresize: true,
      brightness: { 
        min: 50, 
        max: 80
      },
      decay : {
        min: 0.015,
        max: 0.03
      },
      mouse: { 
        click: false, 
        move: false, 
        max: 1 
      }
      
})


