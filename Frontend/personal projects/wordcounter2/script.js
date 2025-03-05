const textInput = document.getElementById("words");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");
const limitMessage = document.getElementById("limitMessage");

const WORD_LIMIT = 50; // Set max word limit //10

const updateCounts = () => {
    let text = textInput.value.trim(); // Get user input & remove extra spaces
    let wordsArray = text.split(/\s+/); // Split into words
    
    let wordCount = wordsArray[0] === "" ? 0 : wordsArray.length; // Handle empty input
    let charCount = text.length; // Character count

    // Update UI
    wordCountDisplay.textContent = wordCount;
    charCountDisplay.textContent = charCount;

    // Check for word limit
    if (wordCount > WORD_LIMIT) {
        limitMessage.textContent = `⚠️ Word limit reached! Maximum ${WORD_LIMIT} words allowed.`;
        textInput.value = wordsArray.slice(0, WORD_LIMIT).join(" "); // Trim excess words
    } else {
        limitMessage.textContent = ""; // Clear message if under limit
    }
};

// Attach event listener to textarea for **live counting**
textInput.addEventListener("keyup", updateCounts);
