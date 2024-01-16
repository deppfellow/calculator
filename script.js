let inputButton = document.querySelectorAll(".btn")
console.log(inputButton)

function operationAdd(x, y) {
    return x + y;
}

function operationSubtract(x, y) {
    return x - y;
}

function operationMultiply(x, y) {
    return x * y;
}

function operationDivide(x, y) {
    return x / y;
}

const opsList = ['div', 'mul', 'min', 'plus']
inputButton.forEach((button) => {
    // const opsClicked = opsList.some(op => button.classList.contains(op))

    button.addEventListener('click', ev => {
        const opsClicked = opsList.some(op => button.classList.contains(op))
        console.log(opsClicked)
    })
})
