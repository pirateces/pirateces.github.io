/***********
* Making a program to add the odd numbers of a given number
**********/
function addOdds() {
    //Input
    let number1 = parseFloat(document.getElementById("number1").value);
    let answer = 0;
    let i;

    //Process
    for (i = 1; i <= number1; i++){
        answer += i;
        i++
    }

    //Output
   document.getElementById('output').innerHTML = "The answer is: " + answer + ".";
}