const celsiusTemp = parseInt(prompt("Enter a number: "));

function calculateFarenheit(number) {
	let calculation = (number * 9/5) + 32;
	return calculation;
}

alert(calculateFarenheit(celsiusTemp));