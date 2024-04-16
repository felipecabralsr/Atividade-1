function ordenarValores() {
    let valores = [];

    for (let i = 0; i < 5; i++) {
        let valor = parseFloat(prompt("Digite o " + (i + 1) + "º valor:"));
        valores.push(valor);
    }

    valores.sort((a, b) => a - b);

    console.log("Valores em ordem crescente:");
    console.log(valores);
}

ordenarValores();
