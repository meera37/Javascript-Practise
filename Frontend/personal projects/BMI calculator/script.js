const form =document.querySelector("form")
const result=document.querySelector("#result")

form.addEventListener("submit",function(event){
    event.preventDefault()

    const height = parseFloat(document.getElementById("height").value)
    const weight = parseFloat(document.getElementById("weight").value)

    if(!height || isNaN(height) ||height<=0){
        result.textContent = "Please provide a valid height"
    }else if(!weight ||isNaN(weight) || weight<=0){
        result.textContent = "Please provide a valid weight"      
    }else{
        const bmi = (weight / ((height/100) **2)).toFixed(2);
        result.innerHTML =`<span>Your BMI is: ${bmi}</span>`
    }


})