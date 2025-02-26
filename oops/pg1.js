//[]
class Employee{
    //properties
    empId
    empName
    empDesg

//constructors
constructor(id , name , desig){
    this.empId = id
    this.empName= name
    this.empDesg= desig
    this.display()
}
//methods
display(){
    console.log(`employee name is ${this.empName}`);
    
}
}
const emp1 = new Employee('1','Max','hr')
// emp1.display()
const emp2 = new Employee('2','Maxwell','developer')
emp2.display()

