
fruits = ['Apple','Orange','Kiwi','Pineapple']
for(i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
    
}
console.log('-------------');

for(let x in fruits){
    // console.log(x);
    console.log(fruits[x]);
    
    
}
console.log('-------------');
for(let x of fruits){
    console.log(x);
    
}
console.log('-------------');

expense=[12000, 5000, 60000, 1200, 50]
//w.a.p to find the highest expense
highest = expense[0]
for(let num of expense){
if(highest<num){
    highest = num
}
    
}
console.log(highest);

//w.a.p to find the lowest expense
lowest = expense[0]
for(let num of expense){
    if(lowest>num){
lowest = num
    }
}
console.log(lowest);

//w.a.p to find the total expense
sum = 0
for( let num of expense){
    sum = sum +num
}
console.log(sum);

console.log('-------------');
arr=[10 ,11 ,12 ,2 ,3, 4]
//w.a.p to check whether 2 is present in the given array
searchitem=2
isPresent= false
for(let num of arr){
if(searchitem==num){
    isPresent = true
    break;
}
}
console.log(isPresent?'present':'not present');
console.log('-------------');
//w.a.p to display the following output
//i/p = [4, 5, 6]
//o/p = [11,10,9]
ip = [4, 5, 6]
op =[]
sum = 0
for(num of ip){
sum=sum+num
}
for(num of ip){
op.push(sum-num)
}
console.log(op);
console.log('-------------');
//w.a.p. to find the duplicate number from a given array
a = [10,20,30,20,30,40,50,60,10,10]
//o/p = [10,20,30]
o=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isDuplicate = false
            for(k=0;k<=o.length-1;k++){
               if(a[i]==o[k]) {
                isDuplicate = true
               }
            }
               if(!isDuplicate){
                o.push(a[i])
               }
            }
          
        }
    }

console.log(o.length==0?'no duplication':o);
console.log('-------------');

//or method
