//write a program to display all even numbers between 1 and 50

i = 1
while(i<=50){
    // console.log(i);
     
    if(i%2==0){
        console.log(i);
        
    }
    i++ 
}
//write a program to display all odd numbers between 1 and 50

i = 1
while(i<=50){
    // console.log(i);
     
    if(i%2!=0){
        console.log(i);
        
    }
    i++ 
}

console.log('................');

//w a p to find the sum of all numbers between 1 - 10
i = 1
sum = 0
while(i<=10){
  sum = sum + i //sum+=i
  i++
}

console.log(sum);

console.log('.................');


// w a p to find the sum of all even numbers between 1 and 10
p=1
sum=0
while(p<10){
    if(p%2==0){
        sum = sum+p
    }
    p++
}
console.log(sum);

console.log('...............');


// w a p to find the sum of all odd numbers between 1 and 10
p=0
sum=0
while(p<10){
    if(p%2!=0){
        sum = sum+p
    }
    p++
}
console.log(sum);

