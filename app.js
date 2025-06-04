function gerarNomeDev() {
    const diaInput = document.getElementById("dia");
    const mesInpunt = document.getElementById("mes");
    const resultadoDiv = document.getElementById("resultado");
    const mensagemErroSpan = document.getElementById("mensagem-erro");
    const btnCopiar = document.getElementById("btnCopiar");

    mensagemErroSpan.textContent = "";
    resultadoDiv.textContent = "";
    btnCopiar.style.display = "none";

    const dia = parseInt(diaInput.value);
    const mes = parseInt(mesInpunt.value);

    if (isNaN(dia) || dia < 1 || dia > 31) {
        mensagemErroSpan.textContent = "Por favor, insira um dia válido (entre 1 e 31).";
        diaInput.focus(); 
        return;
    }

    if (isNaN(mes) || mes < 1 || mes > 12) {
        mensagemErroSpan.textContent = "Por favor, selecione um mês válido.";
        mesInpunt.focus()
        return;
    }

    const diasNoMes = new Date(2024, mes, 0).getDate();
    if (dia > diasNoMes) {
        mensagemErroSpan.textContent = `O mês de ${mesInpunt.options[mesInpunt.selectedIndex].text} tem apenas ${diasNoMes} dias.`;
        diaInput.focus();
        return;
    }

    const titulos = {
    1: "Desenvolvedor(a)",
    2: "Desenvolvedor(a)",
    3: "Programador(a)",
    4: "Programador(a)",
    5: "Programador(a)",
    6: "Estagiário(a)",
    7: "Estagiário(a)",
    8: "Estagiário(a)",
    9: "Sênior",
    0: "Sênior",
};

const mesesTexto = {
    1: "bugado(a)",
    2: "do CTRL C, CTRL V",
    3: "das gambiarras",
    4: "que culpa o cache",
    5: "que esquece o que faz",
    6: "do git vazio",
    7: "das try/catch vazias",
    8: "famosinho do LinkedIn",
    9: "caçador de bugs",
    10: "do Windows Pirata",
    11: "do update sem where",
    12: "do commit bugado",
};

const ultimoDigito = dia % 10;
const titulo = titulos[ultimoDigito];
const mesNome = mesesTexto[mes];

const nomeDevGerado = `${titulo} ${mesNome}`;
resultadoDiv.textContent = nomeDevGerado;
btnCopiar.style.display = "block";

btnCopiar.onclick = () => {
    navigator.clipboard.writeText(nomeDevGerado)
    .then(() => {
        const originalText = btnCopiar.textContent;
        btnCopiar.textContent = "Copiado!";
        setTimeout(() => {
            btnCopiar.textContent = originalText;
        }, 2000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ',err);
        const textArea = document.createElement("textarea");
        textArea.value = nomeDevGerado;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        alert("Nome copiado para a área de transferência!");
    });
};

}
