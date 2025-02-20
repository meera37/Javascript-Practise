// w.a.p to print common numbers from given arrays using binary search (it will not work in duplicate numbers in array. we need to find duplicate and then do)
p =[10,11,12,20,30]
q =[11,20,25,30,33]
store=[]
i=0
j=0
flag = false
while(i<=p.length-1 && j<=q.length-1){
    if(p[i]==q[j]){
        flag = true
    store.push(p[i]) //console.log(p[i])
       i++
       j++
        
    }else if(p[i]<q[j]){
        i++
    }else{
        j++
    }
} console.log(store);

!flag && console.log('no common numbers');

// pairsum hw
//w.a.p to find the pairs that give pairsum as 6 from the given array binary search
a=[2,3,4,5,3]
pairsum =6
