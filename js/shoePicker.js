/***********
* Making a program choose shoes
**********/
function shoePicker() {
    //Input
    let pounds = parseFloat(document.getElementById("pounds").value);

    //Process
    let kilograms = pounds * 0.453592;
    let kilos = kilograms.toFixed(1);

    //Output
    document.getElementById('output').innerHTML = "The shoes of choice are: " + shoes + ".";
}