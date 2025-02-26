//write a program to swap between two given numbers
//num1 = 60
//num2 = 40
//output num1 = 40 num2 =60

num1 = 60
num2 = 40
// console.log(`The num1 is ${num1} and num2 is ${num2}`);

// num3 = num1
// num1 = num2
// num2 = num3
// console.log(` The num1 is ${num1} and num2 is ${num3} `);

console.log(`The num1 is ${num1} and num2 is ${num2}`);
num1 = num1 + num2 //60+40=100
num2 = num1 - num2//100-40=60
num1 = num1 - num2//100-60=40
console.log(`num1 is ${num1} and num2 is ${num2}`)