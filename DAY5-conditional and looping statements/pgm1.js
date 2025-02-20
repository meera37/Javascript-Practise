// Write a program to display the largest among the two given numbers
//num1 = 100
//num = 200

num1 = 100
num2 = 200
if(num1 < num2){
    console.log(`The largest number is ${num2}`);
    
} else if(num1 > num2){
    console.log(`The largest number is ${num1}`);
    
}
else{
    console.log(`both numbers are equal`);
    
}

// write a program to check the largest number among 3 given numbers
n1 = 5
n2 = 6
n3 = 7
if(n1 > n2 && n1 > n3){
    console.log(`The largest number is ${n1}`);
    
} else if(n2 > n1 && n2 > n3){
    console.log(`The largest number is ${n2}`);
}else if(n3 > n1 && n3 > n2){
    console.log(`The largest number is ${n3}`);
}else{
    console.log('numbers are equal');
    
}

// write a program to check the second largest number among 3 given numbers and arrange in descending order
numb1 = 20
numb2 = 40
numb3 = 10

if(numb1 > numb2 && numb1 > numb3){
    if(numb2 > numb3){
        console.log(`The second largest number is ${numb2}`);
        console.log(`descending order is ${numb1} > ${numb2} > ${numb3}`);
        
    }
    else{
        console.log(`The second largest number is ${numb3}`);
        console.log(`descending order is ${numb1} > ${numb3} > ${numb2}`);
    }
    
    
} else if(numb2 > numb1 && numb2 > numb3){
    if(numb1 > numb3){
        console.log(`The second largest number is ${numb1}`);
        console.log(`descending order is ${numb2} > ${numb1} > ${numb3}`);
    }
    else{
        console.log(`The second largest number is ${numb3}`);
        console.log(`descending order is ${numb2} > ${numb3} > ${numb1}`);
    }
    
}else if(numb3 > numb1 && numb3 > numb2){
    if(numb1 > numb2){
        console.log(`The second largest number is ${numb1}`);
        console.log(`descending order is ${numb3} > ${numb1} > ${numb2}`);
    }else{
        console.log(`The second largest number is ${numb2}`);
        console.log(`descending order is ${numb3} > ${numb2} > ${numb1}`);
    }
    
}else{
    console.log('numbers are equal');
}


