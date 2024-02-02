//  1. **Variable Declaration:**
// Declare variables using`var`, `let`, and`const` keywords.
// Choose meaningful names for your variables.

var name = 'John';
let x = 26;
const school = 'University of Port Harcourt';
const itMyDay = true;
let y;


output = name;
output = x;
output = y;
// output = school;
// output = itMyDay;

console.log(output);
console.log(output, typeof output);


const nameArr = ['Sabastine', 'Faith', 'Augustus']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const joinNums = numbers.concat(45, 47, 60);

const schoolArr = school.split(' ').concat('Rivers', 'State', 'Nigeria');

const chg = school.replace('Harcourt', 'Delta')
// console.log(schoolArr[2] = 'Pit')
console.log(schoolArr);
console.log(joinNums);
console.log(`${nameArr[0]} is the last born in the house of ${nameArr[1]} and ${nameArr[2]}`);
console.log(chg)