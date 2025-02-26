// write a pgm tp print all number  from 1 - 5 using for loop
for(i=1;i<=5;i++){
    console.log(i);
    
}
console.log('..........');

//w.a.p to print numbers from 10 - 1 using for loop
for(i=10;i>=1;i--){
    console.log(i);
    
}
console.log('..........');
//w.a.p to print factorial of a given number using for loop
fact=1
num=2
for(i=1;i<=num;i++){
    fact=fact*i
}
console.log(fact);

console.log('.........');


//w.a.p to create a loop which have the potential to print 1-10 numbers but print only 1-5
for(i=1;i<=10;i++){
    // if(i<=5){
    //   console.log(i);
      
    // }
    if(i>5){
        break;
    }
    console.log(i);
}

//write a program to check a given number is prime or not
//prime no only have factors as 1 and the number itself. factor -> divisble ->reminder 0
//1 - neither prime nor composite
//negative - not prime
// positive -prime or composite
num = 37
count = 0 //flag= false
if(num<=0){
    console.log('not a prime number');
    
}else if(num==1){
    console.log('neither prime nor composite');
    
}else{
    for(i=2;i<num;i++){   //i=1 and i<=num   both 1 and num are its factors, if one more factor present count++ then not prime.
        if(num%i==0){
            count ++
            break;    
    }
}console.log(count>0?'not prime':'prime');

}

//write a pgm to display all prime numbers between 1 - 50

for(i=2;i<=50;i++){   
    flag = 0
    for(j=2;j<i;j++){  
        if(i%j==0){
            flag ++
            break;  
        }
    }
    if(flag==0){
        console.log(i);
        
    }
    
}