// function doubleIt(num){
//     return num * 2;
// }

//..... or....

// const doubleIt = function myFun(num){
//     return num *2;
// }

// .......or...

const doubleIt = (num) =>num *2; //..single/one parameter..//
const add = (x, y) => x + y; //...more than one parameter...//
const give5 = () => 5; //..without parameter..//
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result= doubleIt(20);
const result2 = add(20,30);
const result3 = give5();
const result4 = doMath(40, 50);
console.log(result4);