// multilevel inheritance
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
class C extends B{
    methodc(){
        console.log('Inside method C');
        
    }
}
const obj = new C
obj.methodc()
obj.methodb()
obj.methoda()