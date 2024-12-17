

let count = 60;
setInterval(() =>{
	count = count - 1
	let sec = document.querySelector("#sec");
	
	

	if(count === -1){
		count = 60;
		
	}
	sec.innerText = count
	
},1000);


let minutes = 60
setInterval(() => {
minutes = minutes - 1
	
	let minuteElement = document.querySelector('#minutes');
	
	if (minutes === -1){
		minutes = 60 
	}
	minuteElement.innerText = minutes 
	console.log(minuteElement)
}, 6000)
	

let hour = 24
setInterval(() => {
	hour = hour - 1;
	let hourElement = document.querySelector('#hour');
	if(hour === -1){
		hour = 24
	}
	hourElement.innerText = hour
	console.log(hourElement)
}, 10000)


let days = 1
let intervalId = setInterval(() => {
	days = days -1
	let daysElement = document.querySelector('#days')
	if(days === -1){
		days = 0
		clearInterval(intervalId)
	}
	daysElement.innerText = days
	console.log(daysElement)
}, 20000)
 

    




