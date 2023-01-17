// <<<<<<<<<<<<<<<----------------------------------------- 1. Square Pattern ------------------------------------------------------------------->>>>>>>>>>>
var n = 5;
let squarePrint = '';

for (let i = 0; i < n; i++) {
     for (let j = 0; j < n; j++) {
          squarePrint += '*';
     }
     // newline after each row
     squarePrint += '\n';
}

console.log(squarePrint);
/* 
*****
*****
*****
*****
*****

*/

// <<<<<<<<<<<<<<<----------------------------------------- 1. Pyramid Pattern ------------------------------------------------------------------->>>>>>>>>>>
var n = 5;
let pyramidPrint = '';
// External loop
for (let i = 1; i <= n; i++) {
     // printing spaces
     for (let j = 1; j <= n - i; j++) {
          pyramidPrint += ' ';
     }
     // printing star
     for (let k = 0; k < 2 * i - 1; k++) {
          pyramidPrint += '*';
     }
     pyramidPrint += '\n';
}
console.log(pyramidPrint);
/* 
    *
   ***
  *****
 *******
*********

*/
