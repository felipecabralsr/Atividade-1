function calcularQuadrado() {
    let valores = [];

    for (let i = 0; i < 3; i++) {
        let valor = parseFloat(prompt("Digite o " + (i + 1) + "º valor:"));
        valores.push(valor);
    }

    let quadrados = valores.map(valor => valor * valor);

    console.log("Quadrados dos valores:");
    console.log(quadrados);
}

calcularQuadrado();
