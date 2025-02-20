//some()
a = [1,2,3,4,5,6]
//w.a.p to check whether the given array contains even number
even = a.some((num)=>num%2==0)
console.log(even);

even1 = a.filter((num)=>num%2==0)
console.log(even1);

even2 = a.find((num)=>num%2==0)
console.log(even2);

//splice()
colours = ['red','blue','green','yellow','white']
console.log(colours);
// colours.splice(1,1)
// console.log(colours);
// colours.splice(-2,1)
// console.log(colours);
// colours.splice(1,1,'purple')
// console.log(colours);

colours.splice(2,0,'purple')
console.log(colours);

//includes()
console.log(colours.includes('green'));
//indexOf()
console.log(colours.indexOf('green'));
//slice()
x=colours.slice(0,4)
console.log(x);
x=colours.slice(-3)
console.log(x);