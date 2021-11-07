const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const resultTxt = document.querySelector("#result");
const addBtn = document.querySelector("#addbtn");
const substractBtn = document.querySelector("#substractbtn");
const intoBtn = document.querySelector("#intobtn");
const divideBtn = document.querySelector("#dividebtn");
const clearBtn = document.querySelector("#clearbtn");

clearBtn.disabled = true;

addBtn.addEventListener("click", addInputs);
substractBtn.addEventListener("click", substractInputs);
intoBtn.addEventListener("click", intoInputs);
divideBtn.addEventListener("click", divideInput);
clearBtn.addEventListener("click", clearDisplay);
input1.addEventListener("input", () => {
    clearBtn.disabled = false;
});
input2.addEventListener("input", function () {
    clearBtn.disabled = false;
});


function emptyBoxCheck() {

    if (input1.value === "" || input2.value === "") {
        alert("Please enter both the Number ");
        clearDisplay();
    } else {
        let number1 = Number(input1.value);
        let number2 = Number(input2.value);
        if (Number.isInteger(number1) && Number.isInteger(number2)) {
            return 1;
        } else {
            alert("Please enter an integer value");
            clearDisplay();
        }
    }


}

function clearDisplay() {
    input1.value = "";
    input2.value = "";
    resultTxt.value = "";

}

function addInputs() {
    let test = emptyBoxCheck(input1.value, input2.value);
    if (test) {
        let sum = Number(input1.value) + Number(input2.value);
        resultTxt.value = sum
    }
}

function substractInputs() {
    let test = emptyBoxCheck(input1.value, input2.value);
    if (test) {
        let substract = Number(input1.value) - Number(input2.value);
        resultTxt.value = substract;
    }
}

function intoInputs() {
    let test = emptyBoxCheck(input1.value, input2.value);
    if (test) {
        let into = Number(input1.value) * Number(input2.value);
        resultTxt.value = into;
    }
}

function divideInput() {
    let test = emptyBoxCheck(input1.value, input2.value);
    if (test) {
        let divide = Number(input1.value) / Number(input2.value);
        resultTxt.value = divide;

    }
}