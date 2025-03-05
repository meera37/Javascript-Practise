class Landing{
    //properties
    database ={
        "milan":{username:"Milan",password:"milan123"},
        "manu":{username:"Manu",password:"manu123"},
        "mini":{username:"Mini",password:"mini123"},
        "mikki":{username:"Mikki",password:"mikki123"}
    }
    //methods
    saveData(){
        if(this.database){            //check if we have this data
            localStorage.setItem("database",JSON.stringify(this.database))    //then, add this data to local                                                    
        }                                          //storage by using setItem which should be string key and value
    }

    //retrieve data
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))  //to retrieve data -getItem
        console.log(this.database);                      //string to object -json.parse()
        
    }
    register(){
        this.getData()
        console.log(username.value);   //id.value
        console.log(password.value);
        if(username.value=="" || password.value==""){
            alert("Please fill the form completely")
        }
        else{
            if(username.value in this.database){
                alert('user already exists')
            }else{
                this.database[username.value]={username:username.value,password:password.value}
            console.log(this.database);
            this.saveData()
            alert('Registration successful')

            //js navigate
            window.location="login.html"
            }
            
        }

    }

    login(){
        this.getData()
        console.log(logUser.value);
        console.log(logPswd.value);
        if(logUser.value=="" || logPswd.value==""){
            alert("Please fill the form completely")
        }else{
            if(logUser.value in this.database){
                if(this.database[logUser.value].password ==logPswd.value){
                    localStorage.setItem("user",logUser.value)
                    alert('login successful')
                    window.location = "index.html"
                }else{
                    alert("invalid username or password")
                }
            }
            else{
                alert("Please Register")
            }
        }
        

    }
}
const obj =new Landing()
// obj.saveData()
obj.getData()