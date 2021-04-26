const _ = require('lodash');
 
const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);
 
/* output
10
*/