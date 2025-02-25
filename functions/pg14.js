//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(product =>
    console.log(product[1])
      );
console.log('-----------------------------------------');
      
//2. display product whose price < Rs.50
lessPrice =products.filter((less)=>less[2]<50)
//console.log(lessPrice);
lessPrice.forEach((prod)=>console.log(prod[1]))
console.log('-----------------------------------------');

//price = products.filter((less)=>less[2]<50).forEach((item)=>console.log(item[1]));
//console.log(price);

//3. print price of oreo
oreo = products.find((or)=>or[1]=='oreo')
console.log(oreo[2]);
console.log('-----------------------------------------');

//4. print costly product name

costly = products.reduce((sum,x)=>sum[2]>x[2]?sum:x)
console.log(costly[1]);
console.log('-----------------------------------------');

//5. display out of stock product
//also can use filter
products.filter((out)=>out[3]==0).forEach((item)=>console.log(item[1]))
// outstock = products.find((out)=>out[3]==0)  
// console.log(outstock[1]);
console.log('-----------------------------------------');

//6. sort products based on stock in decsending order
desc = products.sort((n1,n2)=>n2[3] - n1[3])
desc.forEach((prod)=> console.log(prod[1],prod[3]))
console.log('-----------------------------------------');

//7. print product having maximum available stock
highStock = products.reduce((high,x)=>high[3]>x[3]?high:x)
console.log(highStock[1]);
console.log('-----------------------------------------');

//8. is there any product can be purchased by Rs. 10
prodten = products.some((biscuit)=>biscuit[2]<=10)
console.log(prodten?'yes':'no');
console.log('-----------------------------------------');

//9. Is there any product in the range of 10 to 30
prod1 = products.some((price)=>price[2]>10 && price[2]<30)
console.log(prod1?'yes':'no');
console.log('-----------------------------------------');

//10. print all products in the range of 10 to 30
products.filter((prod)=>prod[2]>10 && prod[2]<30).forEach((pro)=>
    console.log(pro[1])
    )

console.log('-----------------------------------------');
