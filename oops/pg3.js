class BANK{
    //property
    accountDetails ={
        1000 :{acno:1000, username:"userone",password:"userone",balance:5000},
        1001 :{acno:1001, username:"usertwo",password:"usertwo",balance:10000},
        1002 :{acno:1002, username:"userthree",password:"userthree",balance:1000},
        1003 :{acno:1003, username:"userfour",password:"userfour",balance:2000}
    }

validate(acno){                                    //acno is random word   // control 3
   return acno in this.accountDetails?true:false                           //control 4
}

authen(acno,pswd){
    if(this.validate(acno)){
          if(this.accountDetails[acno].password ==pswd){
            console.log("Valid Account details");
            
          }else{
            console.log('invalid account or password');
          }
    }
    else{
        console.log('invalid account or password');
        
    }
}

balanceCheck(acno,pswd){
    if(this.validate(acno)){
          if(this.accountDetails[acno].password ==pswd){
            console.log(`the current balance of ${acno} is`);
            console.log(this.accountDetails[acno].balance);
            
          }else{
            console.log('invalid account or password');
          }
    }
    else{
        console.log('invalid account or password');
        
    }
}

transfer(fromacno,frompswd,toacno,amount){
    if(this.validate(toacno) && this.validate(fromacno)){
        if(this.accountDetails[fromacno].password ==frompswd){
          if(this.accountDetails[fromacno].balance>=amount){
              console.log(`current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance}`);
              
              this.accountDetails[fromacno].balance -=amount
              this.accountDetails[toacno].balance +=amount

              console.log(`balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance} after money transfer`);
          }
          else{
            console.log('Insufficient Balance');
            
          }
          
        }else{
          console.log('invalid account or password');
        }
  }
  else{
      console.log('invalid account or password');
      
  }
}


}
//w.a.p to validate a given account number
const obj = new BANK()                      //control-first
console.log(obj.validate(1000)?'Account Exist':'No Account Found');  //control-2nd validate(1000)--goes to method  //control 5
 
console.log('---------------------------------');

//w.a.p to authenticate a given account

obj.authen(1000, 'userone')
console.log('---------------------------------');

//w.a.p to check the balance of a given account number

obj.balanceCheck(1000, 'userone')
//w.a.p to transfer money between two accounts
console.log('---------------------------------');
obj.transfer(1000,'userone',1002,500)