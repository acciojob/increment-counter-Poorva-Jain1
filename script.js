//your JS code here. If required.
const counter = document.getElementById('counter');
const btn = document.getElementById('incrementBtn');
btn.addEventListener('click', function () {
	let currentValue = Number(counter.textContent);

	alert("Current value: " + currentValue);

	counter.textContent = currentValue + 1;
});
