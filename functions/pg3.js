//eg - callback function
function greet(name, callback){
    console.log(`Hai ${name}`);
    callback();
    console.log('exe');
    
}
function A(){
    console.log('I am a callback function');
    
}
greet('peter', A)

//predefined function
//nested function
//eg
function C(){
    console.log('Inside function C');
    function B(){
        console.log('Inside function B');
        
    }B();
}
C()
//closure property
//Asynchronous  --time delay
setTimeout(()=>{
    console.log('inside timeout function');
    
},5000)