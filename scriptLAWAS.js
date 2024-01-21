const inputButton = document.querySelectorAll(".btn");
const displayCalc = document.querySelector(".display-container > p")
console.log(displayCalc);

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
            displayCalc.textContent = inputArr
            console.log(inputArr)

        } else if (convClicked) {
            console.log(button.textContent)

        } else if (delClicked) {
            inputArr.pop()
            console.log(inputArr)

        } else if (eqClicked) {
            let result, opsIndex

            while (inputArr.length != 1) {
                inputArr.forEach(val => {
                    opsIndex = inputArr.indexOf(val)

                    // Check PEMDAS order of operation
                    if (val === "*") {
                        result = operationMultiply(inputArr[opsIndex - 1], inputArr[opsIndex + 1])
                    } else if (val === "/") {
                        result = operationDivide(inputArr[opsIndex - 1], inputArr[opsIndex + 1])
                    } else if (val === "+") {
                        result = operationAdd(inputArr[opsIndex - 1], inputArr[opsIndex + 1])
                    } else if (val === "-") {
                        result = operationSubtract(inputArr[opsIndex - 1], inputArr[opsIndex + 1])
                    }

                    inputArr.splice(opsIndex - 1, 3, result)
                })
            }

            displayCalc.textContent = inputArr

            // Second check
            console.log(inputArr)

        } else {
            let num = parseInt(button.textContent, 10)
            if (num) {
                inputArr.push(num)
                inputArr = mergeNumber(inputArr)
            } else {
                inputArr.push(button.textContent)
            }

            // Display the current array input number
            displayCalc.textContent = inputArr
        }


    });
});
