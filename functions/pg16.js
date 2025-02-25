str ='Luminar'
console.log(str.startsWith('L'));
console.log(str.startsWith('l'));
console.log(str.endsWith('nar'));
console.log(str.endsWith('naR'));

str1="hello"
console.log(str1.toUpperCase());
str2="TECHNOLAB"
console.log(str2.toLowerCase());
console.log('--------------------------------------------');

//w.a.p to check a given number is mobile number or not
str5 = '+919879870329'
console.log(str5.length==10?'mobilenumber':'not mobile number');

//w.a.p to check whether a given mail is gmail or not
str4 = 'meerabenny26@gmail.com'
console.log(str4.endsWith('@gmail.com')?'yes':'no');

//w.a.p to check a given string starts with the letter q.
str3 = 'queue'
console.log(str3.startsWith('q') ||str3.startsWith('Q')?'yes':'no');
console.log('--------------------------------------');

//subString()
str6 = 'luminar'
x = str6.substring(0,3)
console.log(x);
y = str6.substring(2)
console.log(y);
//slice()
z = str6.slice(-5)
console.log(z);

//trim()
str7 = "       hello"
console.log(str7);
console.log(str7.trim());

//split()
text = "Good Evening All"
arr = text.split(" ")
// arr = text.split("e")
//arr = text.split("")
console.log(arr);

//replace()
sentence = 'I come from Kakkanad'
a = sentence.replace('Kakkanad','Kochi')
console.log(a);
sentence1 = 'I come from Kakkanad. I also work in Kakkanad'
b = sentence1.replaceAll('Kakkanad','Kochi')
console.log(b);

//Array.from()
str8 = 'luminar'
c=Array.from(str8)
console.log(c);
