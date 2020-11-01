/***********
* Making a program to figure out the discount on different days
**********/
function discountDay() {
    //Input
    let dayOfWeek = new Date().getDay();
    let discount = .10;
    let tax = 0.06;
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let total;

    //Process
    if (dayOfWeek == 2 || dayOfWeek == 3 && subtotal >= 50){
        subtotal *= discount;
        total = subtotal * tax + subtotal;
    }else {
        total = subtotal * tax + subtotal;
    }    

    //Output
   document.getElementById('output').innerHTML = "Your total is: $" + total + ".";
}