function soma  () {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);


    let result = numA + numB

    document.getElementById("result").innerText = result;
}


function subtração  () {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);


    let result = numA - numB

    document.getElementById("result").innerText = result;
}


function multiplicação  () {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);


    let result = numA * numB

    document.getElementById("result").innerText = result;
}


function divisão  () {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);


    let result = numA / numB

    document.getElementById("result").innerText = result;
}
