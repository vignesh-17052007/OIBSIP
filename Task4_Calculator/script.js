function append(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerText = "";
}
function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}
function calculate() {
    let value = document.getElementById("display").value;
    try {
        let result = eval(value);
        document.getElementById("result").innerText = "Result: " + result;
    } catch {
        document.getElementById("result").innerText = "Error";
    }
}
