function calcularMedia() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let media = (valor1 + valor2) / 2;

    console.log("A média é:", media);
}

calcularMedia();
