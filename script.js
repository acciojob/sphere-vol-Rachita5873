function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	var radius = parseFloat(document.getElementById("radius").value);
	var Volume = (4/3) * Math.PI * Math.pow(radius, 3);
	var display = document.getElementById("volume");
	display.value = Volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
