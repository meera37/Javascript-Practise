//w.a.p to display all the vowels from the given string
str = 'Good afternoon'

character = Array.from(str)
     
vowels=['a','e','i','o','u','A','E','I','O','U']
o=[]
for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
        o.push(char)
    }
}
console.log(o);

Array.from(str).filter((item)=>vowels.includes((item))).forEach((item)=>console.log(item)
)
console.log('--------------------------------------');

//w.a.p to check a given string is palindrome or not. eg:malayalam
str1 = 'malayalam'
pal = ''
for(i=str1.length-1;i>=0;i--){
    pal+=str1[i]
}
console.log(pal==str1?'palindrome':'not palindrome');
//or method
pal1 = str.split('').reverse().join('')
console.log(pal==str1?'palindrome':'not palindrome');
//or
start =0
end=str1.length-1
isPal = true
while(start<end){
    if(str[start] !=str[end]){
        isPal=false
    }
    start++
    end--
}
console.log(pal==str1?'palindrome':'not palindrome');
console.log('-------------------------------------');

//w.a.p to find the largest word from the given string //interview qn

str2 = 'my first programme'
words=str2.split(' ')
largest=words[0]
for(let w of words){
    if(largest.length<w.length){
        largest = w
    }
}
console.log(largest);
console.log('--------------------');


x=str2.split(' ').reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(x);


