function verificarPar() {
    let valor = parseInt(prompt("Digite um valor:"));

    if (valor % 2 === 0) {
        console.log("O valor", valor, "é par.");
    } else {
        console.log("O valor", valor, "é ímpar.");
    }
}

verificarPar();