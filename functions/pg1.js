//w.a.p to find a given number is odd or even using function
function num(numb){
    if (numb%2==0){
        console.log('The number is even');
        
    }
    else if(numb%2!=0){
    console.log('The number is odd');
    
    }
    else{
        console.log('Neither odd or even');
        
    }
}
num(56)
num(57)
console.log('-----------');
function oe(num){
  return  num%2==0?'even':'odd'
}
console.log(oe(45));

//w.a.p to find a given number is positive or negative using function
function fin(numb){
    if(numb>0){
        console.log('Positive Number');
        
    }else if(numb<0){
        console.log('Negative number');
        
    }else{
        console.log('Neither positive nor negative');
        
    }
}
fin(2)
fin(-2)
console.log('-----------');
function pn(num){
    return num>0?'positive':num==0?'neither positive nor negative':'negative'
}
console.log(pn(-5));

//w.a.p to find the cube of a given number using function
function cub(numb){
    console.log(numb**3);
    
}
cub(3)

console.log('-----------');
function cube(numb){
    return numb**3
}
console.log(cube(10));
