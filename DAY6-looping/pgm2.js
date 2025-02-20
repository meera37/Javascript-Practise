//input =       2  3    4
//expected op = 24 369 4936

//2*12 //3*123 //4*1234

i = 2
j = '1'
while(i>=1 && i<5){
    j= j+i 
    console.log(i*j);
    
    i++
}

 console.log('.....')

 input = 2
 i = 1
 str = ''
 while(i <=input){   //1 <=2 //2<=2
    str = str + i    // +1=1  //'1'+2=12
    i++               //2
 }
 console.log(str*input); //12 //12*2
 
 console.log('.....')
input = 2
i = 1
num= 0
while(i<=input){
    num = num*10 + i
    i++
}
console.log(num*input);

console.log('..........');


//2+22 // 3+33+333 //4+44+444+4444
input = 3
i = 1
str = ""
sum = 0

while(i <=input){
str =str +input
console.log(str);
sum =sum + Number(str)
i++

}console.log(sum);

console.log('..........');

//w. a p. to display the reverse of a given number.
//eg: 123 o/p = 321
// 12/10 => reminder =last (2) quotient = 1.2

num = 123
rev = 0
while(num>0){    //123>0 //12>0
    lastDigit = num%10   //123%10 =3 //12%10 =2
    rev = rev*10 + lastDigit //0+3 //3*10+2 = 32
    num = parseInt(num /10)  //123/10=12 //12/10=12.3
}
console.log(rev);

// if(num = num % 10){
//     let a = Math.floor(num)
//     console.log(a); 
      
// }
// num = 12
// if( num = num / 10){
//     if(num == num / 2 ){
//         let b = parseInt(num)
//         console.log(b) 
//     }
//     // num= Math.floor(num)
    
    
// }

