/***********
* Fixing loops to show correctly
**********/
function fixLoops() {

    //Loop 1
    let output1 = " ";
    let i = 0;
    while (i < 2) {
        output1 += `Part 1:${i}<br>`;
    i += 1;
    }

    //Loop 2
    let output2 = " ";
    for (let j = 0; j < 3; j++) {
      if (j !== 2) {
        output2 += `Part 2:${j}, `;
      }
      else {
        output2 += `Part 2:${j}`;
      }  
    }
    

    //Loop 3
    let output3 = " ";
    for (let k = 0; k < 4; k++) {
        output3 += k + " ";
    }

    //Loop 4
    let balance = 1000;
    const rate = .10;
    let n = 30;
    for (let s = 0; s < n; s++){
        let interest = balance * rate;
        balance += interest;
    }

    //Output
   document.getElementById('display1').innerHTML    = output1;
   document.getElementById('display2').textContent  = output2;
   document.getElementById('display3').textContent  = output3;
   document.getElementById('display4').textContent  = balance;
}
/***************************
 * let i = 0;
 * while (i < 3); {
 *  // valid statements (this is not the problem)
 *   i++;
 * }
 * This is wrong because i is already less than 3 so it will never be exicuted.
 * If it were changed to an IF statement with an increase and that the i<3 would be the
 * stopping point then it would exicute.
 * ************************/