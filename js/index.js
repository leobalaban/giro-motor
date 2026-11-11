const campoNome = document.getElementById("nomeVisitante");
const saudacao = document.getElementById("saudacao");

const btnSalvar = document.getElementById("btnSalvar");
btnSalvar.addEventListener("click", salvarNome);

function salvarNome() {
    console.log("Salvando nome");
    const nome = campoNome.value;
    if (nome == "") {
        saudacao.textContent = "Digite seu nome antes de salvar!";
    } else {
        localStorage.setItem("nomeVisitante", nome);
        saudacao.textContent = "Olá, " + nome + "! Seja bem-vindo à Giro Motor!";
        campoNome.value = "";
    }
}

const btnApagar = document.getElementById("btnApagar");
btnApagar.addEventListener("click", apagarNome);

function apagarNome() {
    console.log("Apagando nome");
    localStorage.removeItem("nomeVisitante");
    saudacao.textContent = "Olá, visitante! Seja bem-vindo à Giro Motor!";
}

if (localStorage.getItem("nomeVisitante") != null) {
    saudacao.textContent = "Olá, " + localStorage.getItem("nomeVisitante") + "! Bom te ver de volta!";
}

const btnDica = document.getElementById("btnDica");
btnDica.addEventListener("click", alternarDica);

function alternarDica() {
    console.log("Mostrando ou escondendo a dica");
    const caixaDica = document.getElementById("caixaDica");
    caixaDica.classList.toggle("oculta");
    if (btnDica.textContent == "Mostrar dica") {
        btnDica.textContent = "Esconder dica";
    } else {
        btnDica.textContent = "Mostrar dica";
    }
}
