/* Using For loop, find if a number is even or odd in a format below:

"0 is even"

"1 is odd"

"2 is even" */

// for (let num = 0; num <= 20; num++) {
//   if (num % 2 == 0) {
//     console.log(`${num} is even.`);
//   }

//   if (num % 2 != 0) {
//     console.log(`${num} is odd.`);
//   }
// }

/*Construct a pattern below, using a nested for loop.

*

**

***

****

*****

 */

let char = "";
for (let index = 1; index <= 6; index++) {
  for (indexTwo = 1; indexTwo < index; indexTwo++) {
    char += "*";
  }

  if (index == 1) continue;

  console.log(char);
  char = "";
}
