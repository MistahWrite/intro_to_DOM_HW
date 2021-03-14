function setOutput(degrees, type) {
    var output = document.getElementById("output");
    output.innerHTML = degrees + "°" + type;
}
function setElement(element, value){
    var output = document.getElementById(element);
    output.innerHTML = value;
}
function celsiusToFahrenheit(temperature) {
    return (temperature * 1.8) + 32;
}
function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5/9;
}


function convertTemp() {
    var temperature = document.getElementById("temperature").value;
    var type = document.getElementById("temp_type_f");
    var degrees = 0;

    if (document.getElementById("temp_type_f").checked) {
        type="Celsius";
        degrees = fahrenheitToCelsius(temperature);
    } else {
        type="Fahrenheit";
        degrees = celsiusToFahrenheit(temperature);
    }
    setOutput(degrees,type);

    return false;
}

function clearTemp() {
    setOutput(0, 'Fahrenheit');
    setElement("temperature", "32");
    document.getElementById("temp_type_f").checked = "checked";
    setOutput(0,"Celsius");
}