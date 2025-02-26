//Object

// [1000,'Neel','developer','kochi',25000,3]
a=[1000,'Neel','developer','kochi',25000,3]
//key:value
employee ={
    empId:1000,
    empName:'Neel',
    empDesg:'developer',
    empLoc:'kochi',
    empSal:25000,
    empExp:3

}
console.log(a);
console.log(employee);
console.log('---------------------');
console.log(a[2]);
console.log(employee['empDesg']);
console.log(employee.empDesg);

console.log('---------------------');
//display all keys in given object
for(key in employee){             // for in method used for accessing key (array-index,object-key)
    console.log(key);
    //console.log(employee[key]);   // cannot use employee.key or ['key'] as key is variable
}

console.log('---------------------');
//add operation
employee['empAttend']='90%'
console.log(employee);

Object.assign(employee,{status:true})
console.log(employee);

//update
employee['empExp'] +=5
console.log(employee);

//delete
delete employee.status
console.log(employee);