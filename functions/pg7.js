//algorithm
//1. start
//2. sort the given array
//3. find the mid of a given array
//    mid = (low+up)/2
//4. compare the mid value with the searchvalue
     //a. mid == searchitem
     //    - present
     //b. mid<searchitem
     //   low=mid+1
     //c. mid>searchitem
     //   up = mid - 1
//5. repeat the above steps until low and up concides
//6. end


//sort
//arrange the given array in ascending order and descending order
arr=[10,11,12,2 , 3,4]
arr.sort((n1,n2)=>n1-n2)   //n1 to n2 ascending
console.log(arr);
arr.sort((n1,n2)=>n2-n1)
console.log(arr);


//arrange the given array in ascending order and find if 2 is present
arr=[10,11,12,2 , 3,4]
low = 0
up = arr.length-1
searchitem = 2
mid = 0
check = false
arr.sort((n1,n2)=>n1-n2)  //[ 2, 3, 4, 10, 11, 12 ]
while(low<=up){
    mid = Math.floor((low+up)/2)
    // console.log(mid);
    
    if(arr[mid]==searchitem){
        check = true
        console.log('present');
        break
        
    }else if(arr[mid]<searchitem){
    low =mid+1
    }else{
        up = mid -1
    }
}if(check==false){
    console.log('Not present');
    
} //can use truthy operator !check &&  console.log('Not present')
