//foreach() - access each items from a given array

a=[1,4,2,14,25]
//w.a.p. to find square of each element in the given array
a.forEach(num=>{
    console.log(num**2);
    
})
console.log('---------------------');

//map()
sq = a.map((num)=>num**2)
console.log(sq);
console.log('---------------------');
//w.a.p to find cube of the given array using map
cb = a.map((num)=>num**3)
console.log(cb);
console.log('---------------------');
//w.a.p to return a new array with elements with following condition
//ifthe parent array contains element greater than or equal to 13,decrement with 1
//if the parent element contain less than 13, increment with 1
ar = [10,11,12,13,14]
newArray = ar.map((num)=>num>=13?num-1:num+1)
console.log(newArray);
console.log('---------------------');


//reduce
//to find lowest, highest and sum
expense = [12000,5000,60000,1200,50]
//lowest
lowest=expense.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
//highest
highest=expense.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);
//sum
sum = expense.reduce((n1,n2)=>n1+n2)
console.log(sum);
console.log('---------------------');

//filter()  
a = [1,2,3,4,5,6]
//w.a.p to find a ll even numbers from thte given array
even = a.filter((num)=>num%2==0)
console.log(even);
console.log('---------------------');

//find()
even1 = a.find((num)=>num%2==0)
console.log(even1);
console.log('---------------------');

// w.a.p to print numbers greater than or equal to 4
numb = a.filter((num)=>num>=4)
console.log(numb);
console.log('---------------------');