arr = [1, 2, 3]  //{key:value}={0,'1'}
console.log(arr);

// week = ['mon','tue','wed',2 , false]
week = ['mon','tue','wed']
console.log(week);
console.log(week[1]);

console.log(typeof(arr));
console.log(typeof(week));

week.push('Thur')
// week.push('Thur', 'Fri', 'Sat', 'Sun')
week.push('Fri')
// week.push('sun')
week.unshift('Sun')
console.log(week);
week.pop()
console.log(week);
week.shift()
console.log(week);