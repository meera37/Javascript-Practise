//[id, name, designation, location, salary, experience]  using array methods

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
employee.forEach((emp)=>{
    console.log(emp[1]);
    
})

//print total numbers of employee
    console.log(employee.length);  

//print developer employee details
developer = employee.filter((emp) => emp[2]=='developer')

console.log(developer);


//print employee whose salary > 30000
employee.filter((emp)=> (emp[4]>30000)).forEach((item)=>(console.log(item[1])))
        
        
    

// print details of employee Laisha

// Laisha = employee.filter((emp)=>
//     if(emp[1]=='Laisha'){
//         console.log(emp);
//     })
laisha = employee.find((emp)=>emp[1]=='Laisha')
console.log(laisha);

//arrange the employee based on salary in descending order
desSal = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(desSal);


//arrange the employee based on experience in ascending order
ascExp = employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(ascExp);

//find the total expense of the company
sal = employee.map((expense)=>expense[4])
console.log(sal);

expense = sal.reduce((sum,x)=>sum+x)
console.log(expense);

console.log(employee.map((expense)=>expense[4]).reduce((sum,x)=>sum+x));

//find the highest salary
console.log(employee.map((expense)=>expense[4]).reduce((high,x)=>high>x?high:x));

//find the lowest salary 
console.log(employee.map((expense)=>expense[4]).reduce((low,x)=>low<x?low:x));