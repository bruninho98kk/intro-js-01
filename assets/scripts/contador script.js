function subtrair() {
    let atual = Number (document.getElementById("counter").innerHTML);

    let result = atual - 1;

    document.getElementById("counter").innerHTML = result;
}


function somar() {
    let atual = Number (document.getElementById("counter").innerHTML);

    let result = atual + 1;

    document.getElementById("counter").innerHTML = result;
}


function resetar() {
    let atual = Number (document.getElementById("counter").innerHTML);

    let result = atual = 0;

    document.getElementById("counter").innerHTML = result;
}