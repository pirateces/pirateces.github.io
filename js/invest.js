/***********
* Making a program to calculate investment
**********/
function doFV() {
    //Input
    let amountInvested = parseFloat(document.getElementById("amountInvested").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let numOfYears = parseFloat(document.getElementById("noYears").value);
    let periodsPerYear = parseFloat(document.getElementById("periodsPerYear").value);

    //Process
    let FV = function computeFutureValue(amountInvested, annualRate, numOfYears, periodsPerYear)

    //Output
    document.getElementById('output').innerHTML = FV;
}
function computeFutureValue(a, annualRate, numOfYears, periodsPerYear){
    //process for the calcuations
    let r = annualRate/12;
    let n = numOfYears * periodsPerYear;
    let f = a * Math.pow((1 + r),n);
    return f;
}