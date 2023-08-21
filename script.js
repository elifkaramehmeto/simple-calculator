let firstValue = 0;
let option = ""

function clearButton() {
    document.getElementById("result").value = " ";
}
function addNumber(value) {
    document.getElementById("result").value += value;
}

function plus(){

    firstValue = document.getElementById("result").value;
    document.getElementById("result").value = "";

    option = "plus"

}
function minus(){
    firstValue = document.getElementById("result").value;
    document.getElementById("result").value = "";

    option = "minus"
}
function multiple(){
    firstValue = document.getElementById("result").value;
    document.getElementById("result").value= "";

    option="multiple"
}
function divide(){
    firstValue = document.getElementById("result").value;
    document.getElementById("result").value= "";

    option="divide"
}
function percent(){
    firstValue = document.getElementById("result").value;
    document.getElementById("result").value= "";

    option="percent"
}

function equal(){
    const secondValue = document.getElementById("result").value;
    
    if (option == "plus"){
        document.getElementById("result").value = parseInt(firstValue) + parseInt(secondValue);
    }
    else if (option == "minus"){
        document.getElementById("result").value = parseInt(firstValue) - parseInt(secondValue);
    }
    else if(option == "multiple"){
        document.getElementById("result").value = parseInt(firstValue) * parseInt(secondValue);
    }
    else if(option == "divide"){
        document.getElementById("result").value = parseInt(firstValue) / parseInt(secondValue);
    }
    else if(option == "percent"){
        document.getElementById("result").value = parseInt(firstValue) % parseInt(secondValue);
    }
}
