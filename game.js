/**
 * Point culture (en Français car je suis un peu obligé): 
 * Dans ce genre de jeu, un mot equivaut a 5 caractères, y compris les espaces. 
 * La precision, c'est le pourcentage de caractères tapées correctement sur toutes les caractères tapées.
 * 
 * Sur ce... Amusez-vous bien ! 
 */
/*let startTime = null, previousEndTime = null;
let currentWordIndex = 0;
const wordsToType = [];

const modeSelect = document.getElementById("mode");
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");

const remarque = document.querySelector(".remarque")
const body = document.querySelector("body")
const p = document.querySelector("p")
const input = document.querySelector("input")
const theme = document.querySelector(".theme")
theme.addEventListener("click", function(){
    body.classList.toggle("light")
    p.classList.toggle("light")
    results.classList.toggle("light")
    if(theme.textContent == "Dark Mode"){
        theme.textContent= "Light Mode"
    }else if(theme.textContent== "Light Mode"){
        theme.textContent= "Dark Mode"
    }
})

const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
};

// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Initialize the typing test
const startTest = (wordCount = 50) => {
    wordsToType.length = 0; // Clear previous words
    wordDisplay.innerHTML = ""; // Clear display
    currentWordIndex = 0;
    startTime = null;
    previousEndTime = null;

    for (let i = 0; i < wordCount; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        if (index === 0) span.style.color = "gold"; // Highlight first word
        wordDisplay.appendChild(span);
    });

    inputField.value = "";
    results.textContent = "";
};

// Start the timer when user begins typing
const startTimer = () => {
    if (!startTime) startTime = Date.now();
};

// Calculate and return WPM & accuracy
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds
    const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
    const accuracy = (wordsToType[currentWordIndex].length / inputField.value.length) * 100;
    if(20>=wpm && wpm> 0){remarque.style.background = "red"}
    if(40>=wpm && wpm> 20){remarque.style.background = "orange"}
    if(60>=wpm && wpm> 40){remarque.style.background = "yellow"}
    if(80>=wpm && wpm> 60){remarque.style.background = "green"}
    if(100>=wpm && wpm> 80){remarque.style.background = "blue"}
    if(120>=wpm && wpm> 100){remarque.style.background = "violet"}
    if(wpm> 120){remarque.style.background = "gold"}
    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};

// Move to the next word and update stats only on spacebar press
const updateWord = (event) => {
    if (event.key === " ") { // Check if spacebar is pressed
        if (inputField.value.trim() === wordsToType[currentWordIndex]) {
            if (!previousEndTime) previousEndTime = startTime;

            const { wpm, accuracy } = getCurrentStats();
            results.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%`;

            currentWordIndex++;
            previousEndTime = Date.now();
            highlightNextWord();

            inputField.value = ""; // Clear input field after space
            event.preventDefault(); // Prevent adding extra spaces
        }
    }
};

// Highlight the current word in red
const highlightNextWord = () => {
    const wordElements = wordDisplay.children;

    if (currentWordIndex < wordElements.length) {
        if (currentWordIndex > 0) {
            if(body.classList.contains(".light")){
                wordElements[currentWordIndex - 1].style.color = "grey";
            }else{
                wordElements[currentWordIndex - 1].style.color = "black";
            }
        }
        wordElements[currentWordIndex].style.color = "gold";
    }
};

// Event listeners
// Attach `updateWord` to `keydown` instead of `input`
inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
    });
    modeSelect.addEventListener("change", () => startTest());

// Start the test
startTest();
*/


let color = "chocolate"

const time = document.getElementById("time")
const textToType = document.getElementById("para")
const word = document.querySelector(".word")
const previous = document.querySelector("#previous")
const now = document.querySelector("#now")
const next = document.querySelector("#next")
const result = document.querySelector(".result")
previous.style.color = "white"
now.style.color = color
next.style.color = "#3b3b3b"

let wordList = ["apple", "banana", "grape", "orange", "cherry"];

let newWord = ""
let score = 0
let scoreFinal
let scoreList = []
let error = 0
let accuracy

time.style.color = color

function getRandomNumber(){
    let randomNumber = Math.random()*1000
    return randomNumber.toFixed(0)%wordList.length
}

function generateText(numberOfWord){
    for(let i = 0; i<numberOfWord;i++){
        newWord+= wordList[getRandomNumber()] + ` ` 
    }
    newWord+= wordList[getRandomNumber()]
}



const timeOne = document.querySelector(".timeOne")
const timeTwo = document.querySelector(".timeTwo")
let choice = "one"

timeOne.addEventListener("click", function(){
    choice = "one"
    if(choice!="one"){
        timerInitial = 31
        timer = 31
        time.textContent = "30"
    }else{
        timerInitial = 61
        timer = 61
        time.textContent = "60"
    }
})
timeTwo.addEventListener("click", function(){
    choice = "two"
    if(choice!="one"){
        timerInitial = 31
        timer = 31
        time.textContent = "30"
    }else{
        timerInitial = 61
        timer = 61
        time.textContent = "60"
    }
})
generateText(40)

let timerInitial = 61
let timer = 61


let index = 0
previous.textContent = newWord.slice(0,index)
now.textContent = newWord.slice(index,index+1)
next.textContent = newWord.slice(index+1,newWord.length+1)

function updateLetter(){
    index++
    score++
    previous.textContent = newWord.slice(0,index)
    now.textContent = newWord.slice(index,index+1)
    next.textContent = newWord.slice(index+1,newWord.length+1)
    
}
document.addEventListener("keydown", function(event){
    if(timer==timerInitial){
        compteARebour()
        timebarDiminution()
        timeOne.style.visibility= "hidden"
        timeTwo.style.visibility= "hidden"
    }
    if(event.key == newWord[index] || newWord[index]=="_" && event.key == " "){
        updateLetter()
        now.style.color = color
    }else{
        now.style.color = "red"
        if(error<score){error++} 
    }
})


const wpm = document.getElementById("wpm")
const accuracyInHTML = document.getElementById("accuracy")




/*setInterval(() => {
    timer--
    time.textContent = timer
    }, 1000);
*/
   
   function compteARebour(){
       timer--
       time.textContent = timer
       if(timer>0){
           setTimeout(() => {
               if(timer%5==1){scoreList.push(score)} 
               compteARebour()
            }, 1000);
        }else{
            next.style.color = "transparent" 
            /*
            Ici, on va mettre ce qui se passe quand le compte à rebour est fini.
            */
           result.style.visibility = "visible"
           scoreFinal = score/5*(60/timerInitial)
           accuracy = (score-error)*100/score
           wpm.textContent= scoreFinal.toFixed(2)
           accuracyInHTML.textContent= accuracy.toFixed(2)
           bar1Score = scoreList[0]*(60/5)
           bar2Score = scoreList[1]*(60/5) - scoreList[0]*(60/5)
           bar3Score = scoreList[2]*(60/5) - scoreList[1]*(60/5)
           bar4Score = scoreList[3]*(60/5) - scoreList[2]*(60/5)
           bar5Score = scoreList[4]*(60/5) - scoreList[3]*(60/5)
           bar6Score = scoreList[5]*(60/5) - scoreList[4]*(60/5)
           bar7Score = scoreList[6]*(60/5) - scoreList[5]*(60/5)
           bar8Score = scoreList[7]*(60/5) - scoreList[6]*(60/5)
           bar9Score = scoreList[8]*(60/5) - scoreList[7]*(60/5)
           bar10Score = scoreList[9]*(60/5) - scoreList[8]*(60/5)
           bar11Score = scoreList[10]*(60/5) - scoreList[9]*(60/5)
           bar12Score = scoreList[11]*(60/5) - scoreList[10]*(60/5)
           bar1.style.height = `${bar1Score}px`
           bar2.style.height = `${bar2Score}px`
           bar3.style.height = `${bar3Score}px`
           bar4.style.height = `${bar4Score}px`
           bar5.style.height = `${bar5Score}px`
           bar6.style.height = `${bar6Score}px`
           bar7.style.height = `${bar7Score}px`
           bar8.style.height = `${bar8Score}px`
           bar9.style.height = `${bar9Score}px`
           bar10.style.height = `${bar10Score}px`
           bar11.style.height = `${bar11Score}px`
           bar12.style.height = `${bar12Score}px`
           if(choice!="one"){
               bar7.style.visibility="hidden"
               bar8.style.visibility="hidden"
               bar9.style.visibility="hidden"
               bar10.style.visibility="hidden"
               bar11.style.visibility="hidden"
               bar12.style.visibility="hidden"
            }
    }
}



let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ratione. Dolores cum odio consectetur quo tempora amet, laboriosam illum inventore, id iusto, officia debitis animi! Itaque fugiat eos aperiam alias."
let i = 0
function typeText(text, where){
    where.textContent += text[i]
    if(i<text.length-1){
        setTimeout(() => {
            i++
            typeText(text, where)
        }, 20);
    }
}

const exit = document.querySelector(".exit")

exit.addEventListener("click", function(){
    result.style.visibility = "hidden"
    location.reload()
})


const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const bar4 = document.querySelector(".bar4")
const bar5 = document.querySelector(".bar5")
const bar6 = document.querySelector(".bar6")
const bar7 = document.querySelector(".bar7")
const bar8 = document.querySelector(".bar8")
const bar9 = document.querySelector(".bar9")
const bar10 = document.querySelector(".bar10")
const bar11 = document.querySelector(".bar11")
const bar12 = document.querySelector(".bar12")

const timebar = document.querySelector("#timebar")
timebar.style.background = color
let timebarWidth = 100
function timebarDiminution(){
    if(choice!="one"){
        setTimeout(() => {
            timebarWidth-=100/30
            timebar.style.width = `${timebarWidth}vw`
            timebarDiminution()
        }, 1000);
    }else{
        setTimeout(() => {
            timebarWidth-=100/60
            timebar.style.width = `${timebarWidth}vw`
            timebarDiminution()
        }, 1000);
    }
}
