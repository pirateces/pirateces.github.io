/***********
* Making a program to be a simple calculator
**********/
function calcNumbers() {
    //Input
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answer;

    //Process
    if (operator == '+'){
        answer = number1 + number2;}
    else if (operator == '-'){
        answer = number1 - number2;}
    else if (operator == '*'){
        answer = number1 * number2;}
    else {
        answer = number1 / number2;
    }

    //Output
   document.getElementById('output').innerHTML = "The answer is: " + answer + ".";
}