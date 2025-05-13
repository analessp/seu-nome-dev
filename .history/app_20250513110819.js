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
    9: "Sênior",
    0: "Sênior",
};

const meses = {
    1: "bugado(a)",
    2: "do CTRL C, CTRL V",
    3: "das gambiarras",
    4: "que culpa o cache",
    5: "que esquece o que faz",
    6: "do git vazio",
    7: "das try/ catch vazia",
    8: "famosinho do LinkedIn",
    9: "caçador de bugs",
    10: "do Windows Pirata",
    11: "do update sem where",
    12: "do commit bugado",
};

const ultimoDigito = dia % 10;
const titulo = títulos[ultimoDigito];
const