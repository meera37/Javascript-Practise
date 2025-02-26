num1 = 12
num2 =28
lcm = 0
for(i=28; i >=num1 && i>=num2; i--){  //1<12&&28 / 2<12&28 /
    if(num1%i==0 && num2%i==0){      // 12%2&28%2 ==0 / 12%3==0 &28%3 
    lcm = i        //1//2//4
    }
}
console.log(lcm);

//hw wap to print all armstrong numbers between 8 - 500
sum = 0
for(i=8;i<=500;i++){
    lastdigit= i%10
    sum = sum+lastdigit*3 //8/8+1=9
    num = Math.floor(i/10) //1
    console.log(sum);
    
 }
 
 //hw
//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * * 
//* * 
//* 
for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}
for(row=4;row>=1;row--){
    str=""
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}

