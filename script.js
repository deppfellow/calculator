let inputButton = document.querySelectorAll(".btn");
console.log(inputButton);

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

function mergeNumber(inputArray) {
    const resArray = []

    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === 'number') {
            let mergedNum = inputArray[i].toString()

            // Check consecutive number
            while (i + 1 < inputArray.length && typeof inputArray[i + 1] === 'number') {
                mergedNum += inputArray[i + 1]
                i++
            }

            resArray.push(parseInt(mergedNum, 10))
        } else {
            resArray.push(inputArray[i])
        }
    }

    return resArray
}

// const opsList = ['div', 'mul', 'min', 'plus'];
let inputArr = [];
inputButton.forEach((button) => {
    button.addEventListener('click', () => {
        // Utility button
        const clearClicked = button.classList.contains("clear");
        const convClicked = button.classList.contains("conv")
        const delClicked = button.classList.contains("del");

        // Num button
        const eqClicked = button.classList.contains("eq");

        // Operation button
        const opsClicked = button.classList.contains("ops")

        if (clearClicked) {
            inputArr.length = 0
            console.log(inputArr)

        } else if (convClicked) {
            console.log(button.textContent)

        } else if (delClicked) {
            inputArr.pop()
            console.log(inputArr)

        } else if (eqClicked) {
            inputArr = mergeNumber(inputArr)
            console.log(inputArr)

        } else {
            let num = parseInt(button.textContent, 10)
            if (num) {
                inputArr.push(num)
            } else {
                inputArr.push(button.textContent)
            }
            // inputArr.push(button.textContent)
        }


    });
});
