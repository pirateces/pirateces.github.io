/***********
* Making a program to choose shoes
**********/
function shoePicker() {
    //Input
    let weather = document.getElementById("weather");
    let shoes;

    //Process
    if (weather == 'Hot'){
        shoes = 'sandals to keep cool';}
    else if (weather == 'Rain'){
        shoes = 'golashes to keep dry';}
    else if (weather == 'Snow'){
        shoes = 'boots to keep warm';}
    else {
        shoes = 'shoes to cover your feet';
    }

    //Output
   document.getElementById('output').innerHTML = "The choice is: " + shoes + ".";
}