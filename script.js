function volume_sphere() {
    //Write your code here
  let radiusInput = document.getElementById("radius");
    let volumeInput = document.getElementById("volume");
 
    let radius = parseFloat(radiusInput.value);
 
    if (!isNaN(radius)) {
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(4);
    } else {
        volumeInput.value = "NaN";
    }
 
    return false;
} 
 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
 