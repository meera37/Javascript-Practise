//Write a program to check whether a given person is eligible to vote
age = 20
if(age>=18){
    console.log('Eligible to vote');
    
} else{
    console.log("Ineligible to vote")
}

console.log('........');
console.log(age>=18?'Eligible to vote':"Ineligible to vote");



//write a program toc check whether a given number is positive or negative
x = 5
if(x>0){
    console.log('Number is positive');
    
}else if(x==0){
    console.log('neither positive nor negtaive');
    
}
else{
    console.log('number is negative');
    
}

console.log('..........');
console.log(x>0?'Number is positive':x==0?'neither positive nor negtaive':'number is negative');



y = -3
if(y>=0){
    console.log('Number is positive');
    
}else{
    console.log('number is negative');
    
}

//write a program to check whether a number is even or odd number
//even number should give reminder 0 when divided by 2
num = 2
if(num % 2 == 0){
    console.log('even number');
    
}else{
    console.log('odd number');
    
}