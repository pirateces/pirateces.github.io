/***********
* Making a program to figure out windhcill
**********/
function doInputOutput() {
    //Input
    let temp = parseFloat(document.getElementById("tempF").value);
    let windspeed = parseFloat(document.getElementById("windspeed").value);
    let text = " ";
    let f;

    //Process
    if (windspeed < 3) {
        text = "The windspeed is too low";
    }
    else if (temp > 50) 
        text = "The temprature is too high.";
    else {
        f = windChill(temp, windspeed)
        }

    //Output
    document.getElementById('output1').innerHTML = f;
    document.getElementById('output2').innerHTML = text;
}
function windChill(temp, windspeed) {
    f = 35.42 + (0.6215 * temp) - (35.75 * windspeed**0.16) + (0.4275 * temp
        * windspeed**0.16)
    return f;
}