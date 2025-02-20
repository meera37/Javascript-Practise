// write a program to display 'fizz' when a number is divisible by 3 , 'Buzz' when the number is divisible by 5 and 'FizzBuzz' when it is divisble by 15

num = 15
if(num!=0){
    if(num%15==0){
    
        console.log('FizzBuzz');
        
    
    
}else if(num%5==0){
    console.log('Buzz');
    
}else if(num%3==0){
    console.log('Fizz');
    
}
else{
    console.log('not divisible by 3, 5 ,15');
    
}
}else{
    console.log('input number greater tahne zero');
    
}