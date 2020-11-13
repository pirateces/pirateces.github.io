/***********
* Making a program to add the odd numbers of a given number
**********/
function timesTable() {
    //Input
    let number1 = 5;
    let tableLimit = 12;
    let answer = 0;
    let i;
    let text = " ";

    //Process
    for (i = 1; i <= tableLimit; i++){
        answer = i * number1;
        text += number1 + " X " + i + " = " + answer + "<br>";
    }

    //Output
    document.getElementById('output').innerHTML = text;
  
}