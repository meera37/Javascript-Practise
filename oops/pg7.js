//polymorphism
//method overloading -js does not support
class A{
    methoda(){
        console.log('Inside method A');
        
    }
    methoda(num){
        console.log('Inside second method A', num);
        
    }
}
const obj =new A()
obj.methoda(5)
obj.methoda()     // js doesnot support method overloading directly we need to use rest operator

