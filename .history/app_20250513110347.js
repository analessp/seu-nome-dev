function gerarNomeDev() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const resultado = parseInt(document.getElementById("resultado").value);

    if (isNaN(dia) || dia < 1 || dia > 31) {
        resultado.textContent = "Insira um dia válido.";
        return;
    }

    const títulos =
    1: "Desenvolvedor(a)",
    2: "Desenvolvedor(a)",
    3: "Programador(a)",
    4: "Programador(a)",
    5: "Programador(a)",
    6: "Estágiario(a)",
    7: "Estágiario(a)",
    8: "Estágiario(a)",
    1: "Desenvolvedor(a)",
    1: "Desenvolvedor(a)",
}