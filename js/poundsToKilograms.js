/***********
* Making a program to add two numbers together
**********/
function addNumbers() {
    //Input
    let pounds = parseFloat(document.getElementById("pounds").value);

    //Process
    let kilograms = pounds * 0.453592;
    let kilos = kilograms.toFixed(1);

    //Output
    document.getElementById('output').innerHTML = "The conversion is " + kilos + ".";