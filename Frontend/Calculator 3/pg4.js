function display1(num){
result.value+=num
}

function clearAll(){
result.value=""
}
function Back(){
result.value =result.value.slice(0,-1)
}

function equal(){
    try {
        result.value = eval(result.value) 
    } catch (error) {
        result.value="error"
        setTimeout(() => {
            result.value=""
        }, 1000);
    }
}5
