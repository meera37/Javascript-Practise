function AgeCheck(){
    if(Age.value){
        if(Age.value >=18){
          result.innerHTML ="eligible"
          result.style.color="green"
        }
        else if(Age.value <18){
            result.innerHTML ="not eligible"
          result.style.color="red"
        }else{
            result.innerHTML ="invalid input"
            result.style.color="orange" 
        }

    }else{
        result.innerHTML ="please enter a value"
        result.style.color="blue" 
    }
    
}