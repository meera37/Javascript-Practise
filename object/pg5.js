//hw
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log("Product Names:");
products.forEach(product => console.log(product.pName));   
// for(pro of products){
// console.log(pro.pName)}


//2. print all mobile details whose display is lcd
console.log("Mobiles with LCD display:");
products.forEach(product => {
    if (product.display == 'lcd') {
        console.log(product)
    }
});
// can also use for 
// for pro of product( if pro.display =='lcd')
// products.filter((pro)=>pro.display =="lcd").forEach((item)=>console.log(item.pName))

console.log('--------------------------------');
//3. print 5g mobile phone name
console.log("5G Mobile Names:");    // can also use filter and foreach
products.forEach(product => {
    if (product.band == '5g') {
        console.log(product.pName)
    }
});
console.log('--------------------------------');

//4. sort mobile based on price
console.log("Mobiles sorted by price:");
products.sort((a, b) => a.price - b.price).forEach((item)=>console.log( item.pName))
// console.log(products);
console.log('--------------------------------');
//5. print costly mobile
console.log("Most Expensive Mobile:");
let costlyMobile = products.reduce((max, product) => (max.price > product.price ? max : product));
console.log(costlyMobile.pName);
console.log('--------------------------------');
//6. print low cost mobile
console.log("Least Expensive Mobile:");
let lowCostMobile = products.reduce((min, product) => (min.price < product.price  ? min: product));
console.log(lowCostMobile.pName);