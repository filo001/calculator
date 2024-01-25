const screen = document.querySelector(".screen")
const calcButton = document.querySelector(".calcButton")
let total = ''
let currentOperation = ''
let showingAnswer = false;

function inputValue(num) {
    if (showingAnswer === true) {
        screen.value = ''
        screen.value += num
        showingAnswer = false
    }
    else {
    screen.value += num
    }
}

function clearScreen() {
    screen.value = ''
    total = ''
    currentOperation =''

}

function operator(operator) {
    if(currentOperation != '') {
        evaluateAnswer(currentOperation)
        currentOperation = operator
        total = screen.value
    }
    
    else {
        total = screen.value
        screen.value = ''
        currentOperation = operator
    }
}

function evaluateAnswer() {
    showingAnswer = true

    if(currentOperation === "+") {
        screen.value = parseFloat(total) + parseFloat(screen.value)
    }

    if(currentOperation === "-") {
        screen.value = parseFloat(total) - parseFloat(screen.value)
        console.log(total)
        console.log(screen.value) 
    }

    if(currentOperation === "x") {
        screen.value = parseFloat(total) * parseFloat(screen.value)
        console.log(total)
        console.log(screen.value)    
    }

    if(currentOperation === "/") {
        screen.value = parseFloat(total) / parseFloat(screen.value)
        console.log(total)
        console.log(screen.value)
    }
}
calcButton.addEventListener("click", () => {console.log(total)})