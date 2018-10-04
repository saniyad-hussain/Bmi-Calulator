let weight = document.getElementById("weight");
let feet = document.getElementById("feet");
let inch = document.getElementById("inch");
let button = document.getElementById("button");
let result = document.getElementById("result");
let level = document.getElementById("level");
let body = document.getElementById("body");


button.addEventListener("click", () => {
	 let height = Number((feet.value * 12)) + Number(inch.value);
	 let heightMeters = height * 0.0254;
	 let bmi = ((weight.value) / (Math.pow(heightMeters, 2)));

	 if(bmi <= 18.5){
	 	result.innerText = bmi.toFixed(2);
	 	level.innerText = "Underweight";
	 	body.style.background = 'orange';
	 }

	 if(bmi > 18.5 && bmi <= 24.9){
	 	result.innerText = bmi.toFixed(2);
	 	level.innerText = "Normal weight";
	 	body.style.background = 'green';
	 }

	 if(bmi >= 25 && bmi <= 29.9){
	 	result.innerText = bmi.toFixed(2);
	 	level.innerText = "OverWeight";
	 	body.style.background = 'red';
	 }

	 if(bmi >= 30){
	 	result.innerText = bmi.toFixed(2);
	 	level.innerText = "Obesity";
	 	body.style.background = 'red';
	 }
});
