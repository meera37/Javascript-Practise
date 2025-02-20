//write a program to check whether a given number is palindrome or not
//eg: 121 / 121

num = 121
temp = num
rev = 0
while(num>0){
    lastDigit = num%10
    rev = rev*10 + lastDigit
    num=parseInt(num/10)
}
console.log(rev);
// console.log(num);

if(temp == rev){
    console.log('The  number is palindrome');
    
}else{
    console.log('Not a palindrome');
    
}
console.log('...............');

//write a pgm to print a factorial of a given number.
//eg: 4! = 1*2*3*4
num = 4
i =1
fact = 1
while(i<=num){
    fact=fact*i

    i++
}console.log(fact);

//write a program to check given  three digit number is armstrong or not
//eg: 153 = 1**3+5**3+3**3 = 153
num = 153
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
console.log('................');

//write a program to display numbers whose exponential is in the given range 8 - 36
//user can input the power to find the expontenial for a particular number
//eg:user input:2 (power)
//1**2 = 1 2**2=4 3**2=9 4**2=16 5**2=25 6**2=36 7**2=49 etc. /3,4,5,6

input = 2
check = 0
power = 0
while(power<=36){
    check = power ** input
    if(check>=8 && check<=36){
        console.log(power);
    }
    if(check>=36){
        break; // inorder to  forcefully exit the loop
    }
    power ++ 
        
    }
    
   