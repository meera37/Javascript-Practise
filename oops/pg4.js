//inheritance

class A{
    methoda(){
        console.log('Inside method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('Inside method B');
        
    }
}
const obj =new B
obj.methodb()
obj.methoda()