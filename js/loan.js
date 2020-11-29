/***********
* Making a program to calculate loan payment
**********/
function selector() {
    let pick = document.getElementById("selector").value;
    if (pick == 'Payment'){
        function doPayment()
    }
    else {
        function doBalance()
    }
}
function doPayment() {
    //Input
    let amountBorrowed = parseFloat(document.getElementById("amountBorrowed").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let numOfYears = parseFloat(document.getElementById("noYears").value);
    let periodsPerYear = parseFloat(document.getElementById("periodsPerYear").value);
    let Payment = 0;

    //Process
    function computePayment(amountBorrowed, annualRate, numOfYears, periodsPerYear)

    //Output
    document.getElementById('output').innerHTML = Payment;
}
function computePayment(a, annualRate, numOfYears, periodsPerYear){
    //process for the calcuations
    let r = annualRate/12;
    let n = numOfYears * periodsPerYear;
    let f = a * Math.pow((1 + r),n);
    return f;
}
function doBalance() {
    //Input
    let amountBorrowed = parseFloat(document.getElementById("amountBorrowed").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let numOfYears = parseFloat(document.getElementById("noYears").value);
    let periodsPerYear = parseFloat(document.getElementById("periodsPerYear").value);
    let Balance = 0;

    //Process
    function computeBalance(amountBorrowed, annualRate, numOfYears, periodsPerYear)

    //Output
    document.getElementById('output').innerHTML = Payment;
}
function computeBalance(a, annualRate, numOfYears, periodsPerYear){
    //process for the calcuations
    let r = annualRate/12;
    let n = numOfYears * periodsPerYear;
    let f = a * Math.pow((1 + r),n);
    return f;
}