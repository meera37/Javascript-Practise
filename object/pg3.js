text ="HAI HELLO ALL HELLO WORLD"
//w.a.p to print the word count from the given string
//o/p ={HAI :1,HELLO:2,ALL:1,WORLD:1}
words =text.split(" ")
console.log(words);
obj={}
for(let w of words){
   if(w in obj){
    obj[w] +=1
   }else{
    obj[w]=1
   }
    }
    console.log(obj);
//or
obj={}
text.split(" ").forEach((w)=>w in obj?obj[w] +=1:obj[w]=1)
console.log(obj);
//w.a.p to find the number count
NewArray = [10,20,30,10,50,20,30,30,60]
//o/p {10:2,20:2,30:3,50:1,60:1}
obj1={}

NewArray.forEach((item)=>item in obj1? obj1[item]+=1:obj1[item]=1)
console.log(obj1);

//w.a.p to find the first repeated letter // B
pattern = 'ABCBCDA'
x =pattern.split("")  // can also use Array.from
console.log(x);
letter={}
for(a of x){
if(a in letter){
    console.log(a)
    break
}else{
    letter[a] =1
}
}