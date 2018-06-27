function computeNum() {
    var tempo = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windSpeed").value);
    
    document.getElementById("output").innerHTML = windChill(tempo, speed).toPrecision(2);
        
}
 function windChill(tempo, speed) {
        return 35.74 + 0.6215 * tempo - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempo * Math.pow(speed, 0.16);
    }

computeNum();