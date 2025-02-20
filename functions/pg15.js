//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highcase = covid_data.reduce((high,x)=>high[2]>x[2]?high:x)
console.log(highcase[1]);
console.log('----------------------------------');

//2. district having Highest 1st dose vaccine
highdose = covid_data.reduce((high,x)=>high[5]>x[5]?high:x)
console.log(highdose[1]);
console.log('----------------------------------');

//3. district having lowest death rate
lowdeath = covid_data.reduce((low,x)=>low[3]<x[3]?low:x)
console.log(lowdeath[1]);
console.log('----------------------------------');

//4. sort data with +ve case in descending order
descpv = covid_data.sort((n1,n2)=>n2[2] - n1[2])
console.log(descpv);
console.log('----------------------------------');

//5. is district with +ve cases > 15000
greater = covid_data.filter((great)=>great[2]>15000)
// console.log(greater);
greater.forEach(x => {
    console.log(x[1]);
    
});

console.log('----------------------------------');

great = covid_data.some((x)=>x[2]>15000)
console.log(great);
console.log('----------------------------------');

//6. sort data with 1st dose vaccine ascending order
ascDose = covid_data.sort((n1,n2)=>n1[5] - n2[5])
console.log(ascDose);
console.log('----------------------------------');

//7. Print Thrissur details
thrissur = covid_data.find((district)=>district[1]=='Thrissur')
console.log(thrissur);
console.log('----------------------------------');

thrissur1 = covid_data.filter((district)=>district[1]=='Thrissur')
console.log(thrissur);
console.log('----------------------------------');

//8. Print total number of positive cases
pv_case =covid_data.map((total)=>total[2])
totalPv = pv_case.reduce((sum,x)=>sum+x)
console.log(totalPv);
console.log('----------------------------------');

//9. Print total number of curred cases
cr_case =covid_data.map((total)=>total[4])
totalCr =cr_case.reduce((sum,x)=>sum+x)
console.log(totalCr);
console.log('----------------------------------');

//10. Print curred cases in Idukki
idukki = covid_data.filter((cured)=>cured[1]=='Idukki')
idukki.forEach((idu)=>{
    console.log(idu[4])   
})
