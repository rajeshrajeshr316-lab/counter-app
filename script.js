let countValue = document.getElementById("CounterValue");

function OnDecrease() {
    let PreValue = countValue.textContent;
    let UpdateValue = parseInt(PreValue) - 1;
    countValue.textContent = UpdateValue;
    if (UpdateValue > 0) {
        countValue.style.color = "green";

    } else if (UpdateValue < 0) {
        countValue.style.color = "red";

    } else {
        countValue.style.color = "black";
    }
}

function OnReset() {
    let UpdateValue = 0;
    countValue.textContent = UpdateValue;
    countValue.style.color = "black";
}

function OnIncrease() {
    let PreValue = countValue.textContent;
    let UpdateValue = parseInt(PreValue) + 1;
    countValue.textContent = UpdateValue;
    if (UpdateValue > 0) {
        countValue.style.color = "green";
    } else if (UpdateValue < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }

}