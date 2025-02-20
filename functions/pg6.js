//w.a.p to find the pairs that give pairsum as 6 from the given array
a=[2,3,4,5,3]
pairsum =6
nopair=true
o=[]

for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]+a[j]==pairsum){
            nopair=false
        console.log(`(${a[i]},${a[j]})`);
               
    }
}
}
nopair && console.log('no pair');  //truthy operator - if one if condition// instead of else condition


console.log('----------');

// write a program to print common numbers from the given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]

isCommon=false
for(num of p){
    for(numb of q){
        if(num==numb){
            isCommon =true
          console.log(num); 
        }
    }
}
!isCommon && console.log('no common numbers');

console.log('----------');
