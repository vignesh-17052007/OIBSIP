function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
