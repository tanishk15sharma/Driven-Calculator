// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const inputTxt = document.querySelector("#inputtxt");
const redBtn = document.querySelector("#redbtn");
const greenBtn = document.querySelector("#greenbtn");
const blueBtn = document.querySelector("#bluebtn");
const outputTxt = document.querySelector("#output");


redBtn.addEventListener("click", () => {
    outputTxt.innerHTML = inputTxt.value;
    // outputTxt.style.color = "red";
    if (inputTxt.value.length % 2 === 0) {
        outputTxt.style.color = "orange";
    } else {
        outputTxt.style.color = "pink";
    }
})

blueBtn.addEventListener("click", () => {
    outputTxt.innerHTML = inputTxt.value;
    outputTxt.style.color = "blue";
})
greenBtn.addEventListener("click", () => {
    outputTxt.innerHTML = inputTxt.value;
    outputTxt.style.color = "green";
})