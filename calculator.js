let resultField = document.getElementById("result");
            
function appendValue(value) {
    resultField.value += value;
}

function calculate() {
        resultField.value = eval(resultField.value);
    
}

function clearResult() {
    resultField.value = "";
}