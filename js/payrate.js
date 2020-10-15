/***********
* Making a program to compute pay after taxes
**********/
function AfterTaxPay() {
    //Input
    let regularHoursWorked = parseFloat(document.getElementById("regularHours").value);
    let overHoursWorked = parseFloat(document.getElementById("overTimeHours").value);

    //Process
    let regularRate = regularHoursWorked * 15;
    let overTimeRate = 22.5 * overHoursWorked;
    let taxAmount = .15 * (15 * regularHoursWorked + 22.5 * overHoursWorked)
    let afterTaxPay = regularRate + overTimeRate - taxAmount;

    //Output
    document.getElementById('output').innerHTML = "Take home pay is" + afterTaxPay + ".";
}