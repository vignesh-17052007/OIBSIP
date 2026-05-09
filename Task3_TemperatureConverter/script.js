function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    if (temp === "") {
        alert("Enter temperature");
        return;
    }
    let result;

    if (unit === "F") {
        result = (temp - 32) * 5/9;
        document.getElementById("result").value =
            result.toFixed(2) + " °C";
    } else {
        result = (temp * 9/5) + 32;
        document.getElementById("result").value =
            result.toFixed(2) + " °F";
    }
}
