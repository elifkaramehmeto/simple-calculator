const display = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Hata";
            }
        } else if (button.innerText === "AC") {
            display.value = "";
        } else {
            display.value += button.innerText;
        }
    });
});