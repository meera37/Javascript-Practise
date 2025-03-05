const textInput =document.getElementsByClassName("words")[0]
const wordCount =document.querySelector(".word-count span")
const btnCount =document.querySelector("button")

const countWords = ()=>{
    let words = textInput.value
    let wordsTrimmed = words.replace(/\s+/g, " ").trim()
    let splitWords = wordsTrimmed.split(" ")

    console.log(splitWords);

    let numberOfWords = splitWords.length
    if(splitWords[0]==""){
        numberOfWords=0
    }
    
    wordCount.textContent = numberOfWords

    
}
 btnCount.addEventListener("click", countWords)