//nested array
//w. a. p to find sum of all numbers in given array
arr =[[1,2],[3,4],[5,6]]
sum = 0
for(let a of arr){
    for(let x of a){
        sum = sum +x
    }
}console.log(sum);
console.log('---------------');

// w.a.p to find all even numbers from the given array
ar =[[1,2],[3,4],[5,6]]
for(let b of ar){
    for(y of b){
        if(y%2==0){
            console.log(y);
        }
    }
}
console.log('---------------');

