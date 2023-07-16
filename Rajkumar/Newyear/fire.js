	let canvas, width, height, ctx;
	let fireworks = [];
	let particles = [];
	let countdownDate = new Date("January 1, 2024 00:00:00").getTime();

	function setup() {
		canvas = document.getElementById("canvas");
		setSize(canvas);
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		fireworks.push(new Firework(Math.random()*(width-200)+100));
		window.addEventListener("resize",windowResized);
		document.addEventListener("click",onClick);
	}

	setTimeout(setup,1);

	function loop(){
		ctx.globalAlpha = 0.1;
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		ctx.globalAlpha = 1;

		for(let i=0; i<fireworks.length; i++){
			let done = fireworks[i].update();
			fireworks[i].draw();
			if(done) fireworks.splice(i, 1);
		}

		for(let i=0; i<particles.length; i++){
			particles[i].update();
			particles[i].draw();
			if(particles[i].lifetime>800) particles.splice(i,1);
		}

		if(Math.random()<1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));

		// Update countdown elements
		updateCountdown();
	}
	setInterval(loop, 1/80);
	//setInterval(loop, 100/60);
	class Particle {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.vel = randomVec(2);
    this.lifetime = 0;
    this.size = 1.8; // Adjust the size of the particle explosion
  }

  update() {
    this.x += this.vel.x;
    this.y += this.vel.y;
    this.vel.y += 0.01;
    this.vel.x *= 1.00;
    this.vel.y *= 1.00;
    this.lifetime++;
  }

  draw() {
    ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.size =2, this.size); // Adjust the size of the particle explosion
  }
}

	
	class Firework {
  constructor() {
    this.x = Math.random() * width; // Random x position across the canvas width
    this.y = height;
    this.isBlown = false;
    this.col = randomCol();
	this.holdTime = Math.random() * 120 + 120; // Adjust the duration of the firework
    this.timer = 0;
  }

  update() {
    this.y -= 3;
    if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
      this.isBlown = true;
      for (let i = 0; i < 400; i++) {
        particles.push(new Particle(this.x, this.y, this.col));
      }
    }
    return this.isBlown;
	 this.vel.y += 0.02;
  this.vel.x *= 0.99; // Adjust the friction value as per your preference
  this.vel.y *= 0.99; // Adjust the friction value as per your preference
  }

  draw() {
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.size, this.size); // Adjust the size of the firework
  }
}
function randomCol() {
  const vibrantColors = [
    '#ff0057',
    '#0027ff',
    '#fdbe00',
    '#4CAF50',
    '#9C27B0',
    '#FF5722',
    '#00BCD4',
    '#FFEB3B',
    '#607D8B',
    '#E91E63'
  ]; // Define a list of vibrant colors
  const randomIndex = Math.floor(Math.random() * vibrantColors.length);
  return vibrantColors[randomIndex];
}


	
	function randomCol(){
		var letter = '0123456789ABCDEF';
		var nums = [];
	
		for(var i=0; i<3; i++){
			nums[i] = Math.floor(Math.random()*256);
		}
	
		let brightest = 0;
		for(var i=0; i<3; i++){
			if(brightest<nums[i]) brightest = nums[i];
		}
	
		brightest /=255;
		for(var i=0; i<3; i++){
			nums[i] /= brightest;
		}
	
		let color = "#";
		for(var i=0; i<3; i++){
			color += letter[Math.floor(nums[i]/16)];
			color += letter[Math.floor(nums[i]%16)];
		}
		return color;
	}
	
	function randomVec(max){
		let dir = Math.random()*Math.PI*2;
		let spd = Math.random()*max;
		return{x: Math.cos(dir)*spd, y: Math.sin(dir)*spd};
	}
	
	function setSize(canv){
		canv.style.width = (innerWidth) + "px";
		canv.style.height = (innerHeight) + "px";
		width = innerWidth;
		height = innerHeight;
	
		canv.width = innerWidth*window.devicePixelRatio;
		canv.height = innerHeight*window.devicePixelRatio;
		canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
	}
	
	function onClick(e){
		fireworks.push(new Firework(e.clientX));
	}
	
	function windowResized(){
		setSize(canvas);
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
	}
	
	function updateCountdown() {
		// Calculate time difference
		let now = new Date().getTime();
		let timeRemaining = countdownDate - now;

		// Calculate days, hours, minutes, seconds
		let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		// Update countdown elements
		document.getElementById("days").textContent = days;
		document.getElementById("hours").textContent = hours;
		document.getElementById("minutes").textContent = minutes;
		document.getElementById("seconds").textContent = seconds;
	}