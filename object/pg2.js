var car = {
    name:"Baleno",
    model:"Hatch back",
    manufacturer:"maruti",
    price:"10Lakh"
}
//display the car name and manufacturer name
console.log(car.name);
console.log(car['manufacturer']);

//check "model" key is present in the object if present print the value
for(x in car){
    if(x=='model'){
        console.log(car.model);
        
    }   
}
'model' in car && console.log(car.model);

//add "varient" key to the car object with value as "Manuel"
Object.assign(car,{varient:'Manuel'})
console.log(car);
car["varient"]=["Manuel"]
console.log(car);

//insert another value to "automatic" to varient key
car.varient.push('automatic')
console.log(car);
//Add 'color' key to the object with value as "red","yellow","white"
car['color'] = ["red","yellow","white"]
console.log(car);
