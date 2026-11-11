let presencas = [];

if (localStorage.getItem("presencasGiroMotor") != null) {
    presencas = JSON.parse(localStorage.getItem("presencasGiroMotor"));
}

const botoesPresenca = document.getElementsByClassName("btn-presenca");
const avisoPresenca = document.getElementById("avisoPresenca");

for (let i = 0; i < botoesPresenca.length; i++) {
    botoesPresenca[i].addEventListener("click", marcarPresenca);
    if (presencas.includes(botoesPresenca[i].value)) {
        mostrarConfirmado(botoesPresenca[i]);
    }
}

function marcarPresenca(evento) {
    const botao = evento.target;

    if (presencas.includes(botao.value)) {
        console.log("Cancelando presença");
        presencas.splice(presencas.indexOf(botao.value), 1);
        avisoPresenca.textContent = "Presença cancelada no evento: " + botao.value + ".";
        botao.textContent = "Marcar presença";
        botao.classList.remove("btn-success");
        botao.classList.add("btn-dark");
    } else {
        console.log("Marcando presença");
        presencas.push(botao.value);
        avisoPresenca.textContent = "Presença confirmada no evento: " + botao.value + ". Te esperamos lá! Para cancelar, clique no botão de novo.";
        mostrarConfirmado(botao);
    }

    localStorage.setItem("presencasGiroMotor", JSON.stringify(presencas));
    avisoPresenca.classList.remove("oculta");
}

function mostrarConfirmado(botao) {
    botao.textContent = "Presença confirmada ✓";
    botao.classList.remove("btn-dark");
    botao.classList.add("btn-success");
}
