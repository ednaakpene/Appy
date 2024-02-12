// alert('We are Beta!!!');
console.log('We are Beta!!!');

var firstName = 'Eunice';
var age = 22;

let lastName = 'Ametefe';
const boilingWaterTemperature = 100;

console.log(firstName, age, lastName, boilingWaterTemperature)
// console.log is for printing

// if statements
if (age >= 18) {
    console.log('You are eligible');
} else {
    console.log('wait');
}

// loops (for ) where you want to start, condition to end(the condition must be false  ), the number of repititons to go through
for(let i = 1; i < 8; i++){
    // i++ or i + 1 .....i is index
    console.log('I am at index:', i);
}

// functions -1. defining

/*function isEligible(){
    if (age >= 18) {
        console.log('You are eligible');
    } else {
        console.log('wait');
    }
}*/

// functions - 2. invoking
isEligible();

// functions - returning
function isEligible(){
    if (age >= 18) {
        return('You are eligible');
    } else {
        return('wait');
    }
}

alert(isEligible());

// document.body.innerHTML = isEligible();  how javascript can 'mess' with your html


