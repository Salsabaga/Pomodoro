//Set the start time in minutes
//followed by the seconds of the startingMinute to get a complete second countdown

let startingMinute = 25;
let time = startingMinute * 60;

//Set our countdown timer on the screen

const countDownText = document.getElementById("countdown");

//using our updateCounter function, it will perform the action every second

setInterval(updateCounter, 1000);

//minutes goes down every minute as its dividing by the total time of the 25 minutes
//the Math.floor function will round it down
//fix the issue of single digit counter when the number is below 10 so add an if statement to concatenate the 0
//the time is then subtracted by 1 each time at a 1000 second interval

function updateCounter() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	} else {
		seconds;
	}
	countDownText.innerHTML = minutes + ":" + seconds;

	time--;
}