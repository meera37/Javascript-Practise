//method overriding  - js support - it returns last written method...if the methods has same name and argument
class A{
    method(){
        console.log("first method");
        
    }
    method(){
        console.log("second method");
        
    }
}
const obj = new A()
obj.method()