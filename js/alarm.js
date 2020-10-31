/***********
* Making a program to see if you should set an alarm
**********/
function wakeUP() {
    //Input
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let getUp = 'Get UP!!!';

    //Process
    if (dayOfWeek == 6 || dayOfWeek == 7){
        getUp = 'feel free to sleep in';}
        if (month == 1 && dayOfMonth == 1){
            getUp = 'feel free to sleep in';
        } else if (month == 12 && dayOfMonth == 25){
            getUp = 'feel free to sleep in';
        }else if (month == 7 && dayOfMonth == 4){
            getUp = 'feel free to sleep in';
        }

    //Output
   document.getElementById('output').innerHTML = "You should " + getUp + ".";
}