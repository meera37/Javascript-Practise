accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('total number of accounts');

console.log(accounts.length);

//2. print account number whose ac_type is savings
console.log('------------------------');
console.log('account number whose ac_type is savings');
accounts.filter((ac)=>
    ac.ac_type =="savings").forEach((acconum)=>console.log(acconum.acno) )
console.log('------------------------');
//3.print the balance of accnount number 1000
console.log('balance of account number 1000');

accounts.filter((bal)=>bal.acno ==1000).forEach((balanc)=>console.log( balanc.balance))  //use find
console.log('------------------------');
//4. print all gpay transactions
console.log('all gpay transactions')
accounts.map((data)=>data.transaction).flat().filter((item)=>item.mode =='gpay').forEach((item)=>console.log(item))


console.log('------------------------');
//5. print all transaction whose amount > 5000
console.log('all transaction whose amount > 5000');
accounts.map((data)=>data.transaction).flat().filter((item)=>item.amount>5000).forEach((item)=>console.log(item))

console.log('------------------------');
//6. print credit transaction of account 1002
console.log('credit transaction of account 1002');

credit=accounts.map((data)=>data.transaction).flat().filter((item)=>item.to==1002)
console.log(credit);

console.log('------------------------');

//7. print debit transaction of account 1002
console.log('debit transaction of account 1002');

debit=accounts.find((data)=>data.acno==1002).transaction
console.log(debit);
console.log('------------------------');
//accounts.map((data)=>data.transaction).flat().filter((item)=>item.acno==1002).forEach((item)=>console.log(item.to))


//8. print transaction history of 1002
console.log(' transaction history of 1002');
his ={
    credit:credit,
    debit:debit
}
console.log(his);

console.log('------------------------');
//print history as an array
// spread operator - to join two arrays //represented by (...)
transhis = [...credit,...debit]
console.log(transhis);
console.log('------------------------');

//9. print highest balance account details
console.log('highest balance account details');

high=accounts.reduce((x,y)=>x.balance>y.balance?x:y)
console.log(high);
console.log('------------------------');