//hw wap to print all armstrong numbers between 8 - 500
for(i=8;i<=500;i++){

}

temp = num
lastDigit= 0
sum = 0
while(num>0){  //153>0 /15>0 /1>0
    lastDigit = num%10 //3/5/1
    sum = sum + lastDigit**3 //0+3**3=27 / 27+5**3 =152/152+1**3 =153
   num = Math.floor(num/10) // num=parseInt(num/10) //15/1 /0
}
if(temp == sum){  //153 ==153
    console.log('Armstrong Number');
    
}else{
    console.log('Not an armstrong number');
    
}

//w.a.p to display hcf of given two numbers
//eg 12 - 1 2 3 4 6 12
//   28 - 1 2 4 7 14 28
// cf 1 2 4
//hcf = 4

num1=12
num2=28
hcf = 0
for(i=1; i <=num1 && i<=num2; i++){  //1<12&&28 / 2<12&28 /
    if(num1%i==0 && num2%i==0){      // 12%2&28%2 ==0 / 12%3==0 &28%3 
    hcf = i        //1//2//4
    }
}
console.log(hcf); //4


// n1 = 12
// n2 = 28


// for(i=1;i<=n1;i++){
//     if(n1%i==0){
//         // console.log(i);
//         fact_1 = i
//         console.log(fact_1);
        
//     }
// }
// for(j=1;j<=n2;j++){
//     if(n2%j==0){
//         // console.log(i);
//         fact_2 = j
//         console.log(fact_2);
//     }
// }

// lcm for 12 and 28    hw
num1 = 12
num2 =28
lcm = 0
for(i=28; i >=num1 && i>=num2; i--){  //1<12&&28 / 2<12&28 /
    if(num1%i==0 && num2%i==0){      // 12%2&28%2 ==0 / 12%3==0 &28%3 
    lcm = i        //1//2//4
    }
}
console.log(lcm);