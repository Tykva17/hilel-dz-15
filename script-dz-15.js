// N1
let firstNum = +(prompt('Enter first number'))
let secondNum = +(prompt('Enter second number'))

function getMinNum(a,b){
    if(a > b){
        return b;
    }else if(a < b){
        return a;
    }else if(a == b){
        return a + '=' + b;
    }
}
console.log(getMinNum(firstNum, secondNum));

// N2
let numberToE = +(prompt('Enter number'))
let exponentValue = +(prompt('Enter exponentiation value'))

function getNumToExpo(x,n){
    return x**n;
}
console.log(getNumToExpo(numberToE, exponentValue));

// N3
let userAge = +(prompt('Enter your age'))

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }

function checkAge1(age) {
        return age > 18 ? true : confirm('Батьки дозволили?');
}
console.log(checkAge1(userAge));

function checkAge2(age) {
        return age > 18 || confirm('Батьки дозволили?');
}
console.log(checkAge2(userAge));

