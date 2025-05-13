function gerarNomeDev() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const resultado = parseInt(document.getElementById("resultado").value);

    if (isNaN(dia) || dia < 1 || dia > 31) {
        resultado.textContent = "Insira um dia válido.";
        return;
    }

    const títulos =
    1: ""
}