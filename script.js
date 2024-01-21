const numberButtons = document.querySelectorAll('[data-number]')
const opsButtons = document.querySelectorAll('[data-operation]')

const pointButton = document.getElementById("point-button")
const equalButton = document.getElementById("equal-button")
const clearButton = document.getElementById("clear-button")
const negateButton = document.getElementById("negate-button")
const deleteButton = document.getElementById("delete-button")

const lastDisplay = document.getElementById("last-display")
const currentDisplay = document.getElementById("current-display")

let firstOperand, secondOperand = ""
let currentRunningOperation = null
let shouldResetScreen = false

let operationMultiply = (x, y) => x * y;
let operationDivide = (x, y) => x / y;
let operationAdd = (x, y) => x + y;
let operationSubtract = (x, y) => x - y;

equalButton.addEventListener('click', () => {
    continueRunningOperation()
    // console.log("Its running!")
})


// Logic to listen to the button pressed
numberButtons.forEach((num) => {
    num.addEventListener('click', () => appendNumber(num.textContent))
})

opsButtons.forEach((op) => {
    op.addEventListener('click', () => setRunningOperation(op.textContent))
})

function appendNumber(num) {
    if (currentDisplay.textContent === "0" || shouldResetScreen) resetDisplay()

    currentDisplay.textContent += num
}

function resetDisplay() {
    currentDisplay.textContent = ""
    shouldResetScreen = false
}

function setRunningOperation(op) {
    // If there is operation, get the second operand and do evaluation
    if (currentRunningOperation !== null) continueRunningOperation()

    firstOperand = currentDisplay.textContent
    currentRunningOperation = op
    lastDisplay.textContent = `${firstOperand} ${currentRunningOperation}`
    shouldResetScreen = true
}

function continueRunningOperation() {

    if (currentRunningOperation === null) return
    if (currentRunningOperation === "÷" && currentDisplay.textContent === "0") {
        alert("Cannot divide by zero!")
        return
    }

    // Get the second operand to be calculate with first
    secondOperand = currentDisplay.textContent

    // Calculate the result, display in screen
    currentDisplay.textContent = calculate(
        currentRunningOperation, firstOperand, secondOperand)
    lastDisplay.textContent = `${firstOperand} ${currentRunningOperation} ${secondOperand} =`

    // Set the current running ops to null for next operations
    currentRunningOperation = null
}

function calculate(op, x, y) {
    x = Number(x)
    y = Number(y)

    switch (op) {
        case '÷':
            if (y === 0) return null
            else return operationDivide(x, y)
        case 'x':
            return operationMultiply(x, y)
        case '+':
            return operationAdd(x, y)
        case '-':
            return operationSubtract(x, y)
        default:
            return null
    }
}
